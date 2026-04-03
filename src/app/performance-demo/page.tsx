// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import Link from 'next/link';

// const sourceText = `At ERYON AI, we build digital systems that don't just work—they perform.
// Recently, the frontend engineering community has been exploring radical new ways to render text and layout components to achieve ultimate performance.
// Normally, when a browser wraps text or calculates heights, it generates DOM (HTML) elements and leaves the heavy lifting to the browser's rendering engine. However, manipulating the DOM is highly expensive. When you add complex animations or dynamic layout changes, performance can degrade significantly due to "layout thrashing."
// This demonstration showcases how we can completely bypass the DOM's limitations. By using pure JavaScript arithmetic and the HTML5 Canvas API, we measure text and calculate layouts entirely in memory.
// In this demo, we make the text dynamically avoid your mouse cursor. We compare two approaches: "DOM Mode" and "Canvas Mode".
// In DOM Mode, we read the exact position of every word on the screen every frame, calculate its distance from your mouse, and apply a CSS transform. Mixing "Read" and "Write" operations forces the browser to recalculate the layout repeatedly, crushing the framerate.
// In Canvas Mode, we cache the text dimensions once. Instead of touching the DOM, we use raw arrays in JS memory to determine positions and paint them directly to the screen. Even with massive amounts of text, it runs effortlessly at 60 FPS.
// Move your mouse vigorously across the screen to see the extreme difference in rendering performance.`;

// const fullText = (sourceText + "\n\n").repeat(3); 
// const fontSize = 16;
// const fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
// const fontString = `${fontSize}px ${fontFamily}`;

// export default function PerformanceDemo() {
//   const [mode, setMode] = useState<'canvas' | 'dom'>('canvas');
//   const [fps, setFps] = useState<number>(0);
//   const [frameTime, setFrameTime] = useState<string>('0.0');
//   const [elementsCount, setElementsCount] = useState<number>(0);
  
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const domContainerRef = useRef<HTMLDivElement>(null);
//   const cursorRef = useRef<HTMLDivElement>(null);
  
//   const state = useRef({
//     isRunning: true,
//     mouseX: typeof window !== 'undefined' ? window.innerWidth / 2 : 500,
//     mouseY: typeof window !== 'undefined' ? window.innerHeight / 2 : 500,
//     targetMouseX: typeof window !== 'undefined' ? window.innerWidth / 2 : 500,
//     targetMouseY: typeof window !== 'undefined' ? window.innerHeight / 2 : 500,
//     obstacleRadius: 120,
//     preparedSegments: [] as {text: string, width: number, isBreak: boolean}[],
//     domElements: [] as HTMLSpanElement[],
//     lastTime: 0,
//     frames: 0,
//     frameTimes: [] as number[],
//   });

//   // Initialization
//   useEffect(() => {
//     state.current.lastTime = performance.now();
//     const segmenter = new Intl.Segmenter('en-US', { granularity: 'word' });
//     const segments = Array.from(segmenter.segment(fullText));
    
//     // Init Canvas
//     if (canvasRef.current) {
//       const ctx = canvasRef.current.getContext('2d');
//       if (ctx) {
//         ctx.font = fontString;
//         state.current.preparedSegments = segments.map(seg => ({
//           text: seg.segment,
//           width: ctx.measureText(seg.segment).width,
//           isBreak: seg.segment === '\n'
//         }));
//         if (mode === 'canvas') setElementsCount(state.current.preparedSegments.length);
//       }
//     }
    
//     // Init DOM
//     if (domContainerRef.current) {
//       domContainerRef.current.innerHTML = '';
//       state.current.domElements = [];
//       const fragment = document.createDocumentFragment();
      
//       segments.forEach(seg => {
//         if (seg.segment === '\n') {
//           fragment.appendChild(document.createElement('br'));
//         } else {
//           const span = document.createElement('span');
//           span.textContent = seg.segment;
//           span.style.display = 'inline-block';
//           span.style.whiteSpace = 'pre';
//           span.style.transition = 'none';
//           span.style.willChange = 'transform';
//           fragment.appendChild(span);
//           state.current.domElements.push(span);
//         }
//       });
//       domContainerRef.current.appendChild(fragment);
//       if (mode === 'dom') setElementsCount(state.current.domElements.length);
//     }
    
//     const handleResize = () => {
//       if (canvasRef.current && mode === 'canvas') {
//         const dpr = window.devicePixelRatio || 1;
//         canvasRef.current.width = window.innerWidth * dpr;
//         canvasRef.current.height = window.innerHeight * dpr;
//         const ctx = canvasRef.current.getContext('2d');
//         if (ctx) ctx.scale(dpr, dpr);
//       }
//     };
    
//     window.addEventListener('resize', handleResize);
//     handleResize();
    
//     const handleMouseMove = (e: MouseEvent) => {
//       state.current.targetMouseX = e.clientX;
//       state.current.targetMouseY = e.clientY;
//     };
//     const handleTouchMove = (e: TouchEvent) => {
//       e.preventDefault();
//       state.current.targetMouseX = e.touches[0].clientX;
//       state.current.targetMouseY = e.touches[0].clientY;
//     };
    
//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('touchmove', handleTouchMove, { passive: false });
    
//     // Animation Loop
//     let animationId: number;
//     const animate = () => {
//       const s = state.current;
//       if (!s.isRunning) return;
      
//       s.mouseX += (s.targetMouseX - s.mouseX) * 0.2;
//       s.mouseY += (s.targetMouseY - s.mouseY) * 0.2;
      
//       const t0 = performance.now();
      
//       if (mode === 'canvas' && canvasRef.current) {
//         const ctx = canvasRef.current.getContext('2d');
//         if (ctx) {
//           ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
          
//           // Compute layout
//           const commands = [];
//           let currentX = 0;
//           let currentY = 140; 
//           const lineHeight = fontSize * 1.8;
//           const paddingX = 30;
//           const safeMaxWidth = window.innerWidth - paddingX * 2;
//           const effectiveRadius = s.obstacleRadius + fontSize; 
          
//           for (let i = 0; i < s.preparedSegments.length; i++) {
//             const seg = s.preparedSegments[i];
//             if (seg.isBreak) { currentX = 0; currentY += lineHeight; continue; }
//             if (currentX + seg.width > safeMaxWidth) { currentX = 0; currentY += lineHeight; }
//             if (currentY > window.innerHeight + lineHeight) break;
            
//             const dy = currentY - s.mouseY;
//             if (Math.abs(dy) < effectiveRadius) {
//               const dx = Math.sqrt(effectiveRadius ** 2 - dy ** 2);
//               const oLeft = s.mouseX - paddingX - dx;
//               const oRight = s.mouseX - paddingX + dx;
//               if (currentX + seg.width > oLeft && currentX < oRight) {
//                 currentX = oRight;
//                 if (currentX + seg.width > safeMaxWidth) {
//                   currentX = 0; currentY += lineHeight;
//                 }
//               }
//             }
//             if (seg.text.trim() !== '') {
//               commands.push({ text: seg.text, x: paddingX + currentX, y: currentY });
//             }
//             currentX += seg.width;
//           }
          
//           // Draw Text
//           ctx.font = fontString;
//           ctx.textBaseline = 'middle';
//           ctx.fillStyle = '#94a3b8';
//           for (let i = 0; i < commands.length; i++) {
//             ctx.fillText(commands[i].text, commands[i].x, commands[i].y);
//           }
          
//           // Draw Cursor
//           ctx.beginPath();
//           ctx.arc(s.mouseX, s.mouseY, s.obstacleRadius, 0, Math.PI * 2);
//           const grad = ctx.createRadialGradient(s.mouseX, s.mouseY, s.obstacleRadius - 20, s.mouseX, s.mouseY, s.obstacleRadius + 20);
//           grad.addColorStop(0, 'rgba(0, 102, 255, 0.0)');
//           grad.addColorStop(0.5, 'rgba(0, 102, 255, 0.2)');
//           grad.addColorStop(1, 'rgba(0, 102, 255, 0.0)');
//           ctx.fillStyle = grad;
//           ctx.fill();
//           ctx.strokeStyle = 'rgba(0, 102, 255, 0.4)';
//           ctx.lineWidth = 1.5;
//           ctx.stroke();
//         }
//       } else if (mode === 'dom' && cursorRef.current) {
//         cursorRef.current.style.left = s.mouseX + 'px';
//         cursorRef.current.style.top = s.mouseY + 'px';
        
//         for (let i = 0; i < s.domElements.length; i++) {
//           const el = s.domElements[i];
//           const rect = el.getBoundingClientRect(); // READ - Forces Layout Thrashing
//           const centerX = rect.left + rect.width / 2;
//           const centerY = rect.top + rect.height / 2;
//           const dx = centerX - s.mouseX;
//           const dy = centerY - s.mouseY;
//           const dist = Math.sqrt(dx * dx + dy * dy);
          
//           // WRITE
//           if (dist < s.obstacleRadius + 10) {
//             const force = (s.obstacleRadius + 10 - dist) / (s.obstacleRadius + 10);
//             const angle = Math.atan2(dy, dx);
//             const moveX = Math.cos(angle) * force * 50;
//             const moveY = Math.sin(angle) * force * 50;
//             el.style.transform = `translate(${moveX}px, ${moveY}px)`;
//             el.style.color = '#0066ff';
//           } else {
//             el.style.transform = 'translate(0px, 0px)';
//             el.style.color = '';
//           }
//         }
//       }
      
//       const t1 = performance.now();
//       s.frameTimes.push(t1 - t0);
//       if (s.frameTimes.length > 20) s.frameTimes.shift();
      
//       s.frames++;
//       const now = performance.now();
//       if (now - s.lastTime >= 500) {
//         const currentFps = Math.round((s.frames * 1000) / (now - s.lastTime));
//         const avgFrameTime = s.frameTimes.reduce((a, b) => a + b, 0) / s.frameTimes.length;
//         setFps(currentFps);
//         setFrameTime(avgFrameTime.toFixed(1));
//         s.frames = 0;
//         s.lastTime = now;
//       }
      
//       animationId = requestAnimationFrame(animate);
//     };
    
//     animationId = requestAnimationFrame(animate);
    
//     return () => {
//       cancelAnimationFrame(animationId);
//       window.removeEventListener('resize', handleResize);
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('touchmove', handleTouchMove);
//     };
//   }, [mode]);

//   return (
//     <div className="relative w-screen h-screen overflow-hidden bg-slate-950 text-slate-300 font-sans">
      
//       {/* Background Modes */}
//       {mode === 'canvas' && (
//         <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 block" />
//       )}
      
//       {mode === 'dom' && (
//         <>
//           <div ref={domContainerRef} className="absolute inset-[130px_30px_30px_30px] z-10 text-[16px] leading-[1.8] pointer-events-none" />
//           <div 
//             ref={cursorRef} 
//             className="absolute rounded-full pointer-events-none z-20 -translate-x-1/2 -translate-y-1/2"
//             style={{
//               width: 240, height: 240,
//               background: 'radial-gradient(circle, rgba(0,102,255,0.15) 0%, rgba(0,102,255,0) 70%)',
//               border: '1.5px solid rgba(0,102,255,0.3)'
//             }}
//           />
//         </>
//       )}

//       {/* UI Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full pointer-events-none p-6 z-30 flex flex-col">
//         <div className="bg-slate-900/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl max-w-2xl shadow-2xl pointer-events-auto">
//           <div className="flex items-center gap-4 mb-4">
//              <Link href="/" className="text-brand-blue hover:text-cyan-400 text-sm font-semibold tracking-wide transition-colors uppercase">
//                ← Back
//              </Link>
//              <h1 className="text-xl font-bold text-white m-0 tracking-tight">Layout Performance Demo</h1>
//           </div>
          
//           <div className="flex gap-3 mb-4">
//             <button 
//               onClick={() => { setMode('canvas'); setElementsCount(state.current.preparedSegments.length); }}
//               className={`px-4 py-2 rounded-lg text-sm transition-all ${mode === 'canvas' ? 'bg-brand-blue/20 border-brand-blue text-brand-blue font-bold border' : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'}`}
//             >
//               Canvas Mode (Fast)
//             </button>
//             <button 
//               onClick={() => { setMode('dom'); setElementsCount(state.current.domElements.length); }}
//               className={`px-4 py-2 rounded-lg text-sm transition-all ${mode === 'dom' ? 'bg-brand-blue/20 border-brand-blue text-brand-blue font-bold border' : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'}`}
//             >
//               DOM Mode (Slow)
//             </button>
//           </div>
          
//           <p className="text-sm leading-relaxed text-slate-400 mb-5 min-h-[3rem]">
//             {mode === 'canvas' 
//               ? <strong className="text-white font-medium">Canvas Mode:</strong> 
//               : <strong className="text-red-400 font-medium">DOM Mode:</strong>}
//             {mode === 'canvas'
//               ? ' Text widths are cached and coordinates are calculated purely in-memory via JS arrays. Bypassing the DOM layout engine allows for blistering fast 60FPS fluid interactions with zero thrashing.'
//               : ' Reading position coordinates (getBoundingClientRect) and writing styling simultaneously forces Layout Thrashing. The browser engine struggles to recalculate the page constantly, drastically reducing FPS.'}
//           </p>
          
//           <div className="flex gap-4 font-mono text-sm">
//             <div className="bg-white/5 p-3 pr-8 rounded-xl border border-white/5 flex-1">
//               <span className="text-slate-400 text-xs tracking-wider uppercase block mb-1">Rendering FPS</span>
//               <span className={`text-xl block font-bold ${fps < 30 ? 'text-red-400' : 'text-emerald-400'}`}>{fps}</span>
//             </div>
//             <div className="bg-white/5 p-3 pr-8 rounded-xl border border-white/5 flex-1">
//               <span className="text-slate-400 text-xs tracking-wider uppercase block mb-1">Frame Time</span>
//               <span className={`text-xl block font-bold ${parseFloat(frameTime) > 16.6 ? 'text-red-400' : 'text-emerald-400'}`}>{frameTime} ms</span>
//             </div>
//             <div className="bg-white/5 p-3 pr-8 rounded-xl border border-white/5 flex-1">
//               <span className="text-slate-400 text-xs tracking-wider uppercase block mb-1">Elements Count</span>
//               <span className="text-slate-200 text-xl block font-bold">{elementsCount.toLocaleString()}</span>
//             </div>
//           </div>
//         </div>
//       </div>
      
//     </div>
//   );
// }
