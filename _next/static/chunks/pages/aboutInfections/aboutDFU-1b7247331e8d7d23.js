(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[713],{2691:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/aboutInfections/aboutDFU",function(){return s(2278)}])},6314:function(e,t){"use strict";t.Z={src:"/_next/static/media/logo.f6a7c8f7.gif",height:800,width:800,blurWidth:0,blurHeight:0}},7634:function(e,t,s){"use strict";var a=s(5893),r=s(7294),i=s(5675),n=s.n(i),l=s(6314);t.Z=function(){return(0,r.useEffect)(()=>{},[]),(0,a.jsxs)("footer",{className:"footer p-10 bg-neutral text-neutral-content",children:[(0,a.jsxs)("aside",{children:[(0,a.jsx)(n(),{src:l.Z,width:150,height:150,alt:"Picture of the author",style:{borderRadius:70}}),(0,a.jsxs)("p",{children:["Decoding Diabetics",(0,a.jsx)("br",{})]})]}),(0,a.jsxs)("nav",{children:[(0,a.jsx)("h6",{className:"footer-title",children:"Social"}),(0,a.jsxs)("div",{className:"grid grid-flow-col gap-4",children:[(0,a.jsx)("a",{children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"fill-current",children:(0,a.jsx)("path",{d:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"})})}),(0,a.jsx)("a",{children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"fill-current",children:(0,a.jsx)("path",{d:"M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"})})}),(0,a.jsx)("a",{children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"fill-current",children:(0,a.jsx)("path",{d:"M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"})})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{children:"Rate Us"}),(0,a.jsx)("div",{className:"rating",children:[1,2,3,4,5].map(e=>(0,a.jsx)("input",{type:"radio",name:"rating-2",value:e,className:"mask mask-star-2 bg-orange-400"},e))})]})]})]})}},9361:function(e,t,s){"use strict";s.d(t,{Z:function(){return u}});var a=s(5893),r=s(1664),i=s.n(r),n=s(1163),l=s.n(n),o=s(7294),c=s(6455),d=s.n(c),h=s(5675),x=s.n(h),m=s(6314);function u(){let[e,t]=(0,o.useState)(null);(0,o.useEffect)(()=>{let e=sessionStorage.getItem("user");e&&t(e)},[]);let s=async()=>{if(e){if((await d().fire({title:"Are you sure?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Log out"})).isConfirmed)try{await sessionStorage.removeItem("user"),l().push("/login")}catch(e){console.error("Error during handleLogout: ",e),alert("An error occurred during logout. Please try again later.")}}else await sessionStorage.removeItem("user"),l().push("/login")};return(0,a.jsxs)("div",{className:"navbar fixed top-0 left-0 right-0 bg-opacity-75 bg-base-300 text-neutral z-50",children:[(0,a.jsxs)("div",{className:"navbar-start",children:[(0,a.jsx)("a",{className:"btn btn-ghost text-lg",children:"Decoding Diabetics"}),(0,a.jsx)(x(),{src:m.Z,width:70,height:70,alt:"Picture of the author",style:{borderRadius:70}})]}),(0,a.jsx)("div",{className:"navbar-center hidden lg:flex  text-gray-700 ",children:(0,a.jsx)("ul",{className:"menu menu-horizontal  pl-16 ml-6",children:e?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("li",{children:(0,a.jsx)(i(),{href:"/",children:(0,a.jsx)("b",{className:" text-base hover:text-sky-800",children:" Home"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(i(),{href:"/detections/acanthosisNigricans_detection",children:(0,a.jsx)("b",{className:" text-base hover:text-sky-800",children:" Acanthosis Nigricans Detection"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(i(),{href:"/detections/footUlcer_detection",children:(0,a.jsx)("b",{className:" text-base hover:text-sky-800",children:" Foot Ulcer Detection"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(i(),{href:"/detections/nailDefects_detection",children:(0,a.jsx)("b",{className:" text-base hover:text-sky-800",children:" Nail Infection Detection"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(i(),{href:"https://diabetic-retinopathy-phi.vercel.app/",target:"_blank",rel:"noopener noreferrer",children:(0,a.jsx)("b",{className:" text-base hover:text-sky-800",children:"  Retinopathy Detection"})})})]}):(0,a.jsx)(a.Fragment,{})})}),(0,a.jsx)("div",{className:"navbar-end",onClick:s,children:(0,a.jsx)("a",{className:"btn  bg-blue-400",children:e?"Log out":"Log in"})})]})}},2278:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return d}});var a=s(5893);s(7294);var r=s(9361),i=s(7634),n={src:"/_next/static/media/learnmoreDFU.efead1d7.webp",height:445,width:600,blurDataURL:"data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADwAQCdASoIAAYAAkA4JQBOgCHiBWikbAAA/v0wBmlPzJgE/XjNLT/Yz8YnyN+lcla5WjvZlSYAAA==",blurWidth:8,blurHeight:6},l=s(5675),o=s.n(l),c=s(1163),d=function(){let e=(0,c.useRouter)();return(0,a.jsxs)("div",{className:"flex flex-col min-h-screen mt-20",children:[(0,a.jsx)(r.Z,{}),(0,a.jsx)("main",{className:"flex-grow flex flex-col items-center justify-center p-4",children:(0,a.jsxs)("div",{className:"max-w-3xl bg-white rounded-lg shadow-lg p-6",children:[(0,a.jsx)("h1",{className:"text-2xl md:text-4xl font-bold text-center mb-6",children:"Understanding Diabetic Foot Ulcers"}),(0,a.jsx)(o(),{src:n,alt:"Diabetic Foot Ulcers",className:"w-full h-[450px] rounded-lg shadow-md mb-6"}),(0,a.jsx)("h2",{className:"text-xl md:text-2xl font-semibold mb-4",children:"What are Diabetic Foot Ulcers?"}),(0,a.jsx)("p",{className:"text-lg text-gray-700 leading-relaxed mb-4",children:"Diabetic foot ulcers are open sores or wounds that occur in approximately 15% of patients with diabetes. They are most commonly located on the bottom of the foot. Diabetes can cause poor blood circulation and nerve damage, leading to increased risk for ulcers."}),(0,a.jsx)("div",{className:"w-full rounded-lg overflow-hidden shadow-md mb-6",children:(0,a.jsx)("iframe",{className:"w-full h-64 md:h-96",src:"https://www.youtube.com/embed/HV3gnaSKaE0?rel=0",title:"Diabetic Foot Ulcers Video",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),(0,a.jsx)("h2",{className:"text-xl md:text-2xl font-semibold mb-4",children:"Causes of Diabetic Foot Ulcers"}),(0,a.jsx)("p",{className:"text-lg text-gray-700 leading-relaxed mb-4",children:"The primary cause of diabetic foot ulcers is poor blood circulation, nerve damage (neuropathy), and high blood sugar levels. These factors make it difficult for wounds to heal, leading to ulcer formation."}),(0,a.jsx)("h2",{className:"text-xl md:text-2xl font-semibold mb-4",children:"Symptoms and Appearance"}),(0,a.jsx)("p",{className:"text-lg text-gray-700 leading-relaxed mb-4",children:"Diabetic foot ulcers can appear as a red, sore spot on the skin, which may become infected if not treated. In severe cases, the ulcer can penetrate deep into the tissue, affecting bones and leading to serious complications."}),(0,a.jsx)("h2",{className:"text-xl md:text-2xl font-semibold mb-4",children:"Prevention and Management"}),(0,a.jsx)("p",{className:"text-lg text-gray-700 leading-relaxed mb-4",children:"Prevention involves proper foot care, managing blood sugar levels, and regular check-ups with a healthcare provider. Wearing comfortable shoes, keeping feet clean, and avoiding injuries are key strategies."}),(0,a.jsx)("h2",{className:"text-xl md:text-2xl font-semibold mb-4",children:"Treatment Options"}),(0,a.jsx)("p",{className:"text-lg text-gray-700 leading-relaxed mb-4",children:"Treatment includes cleaning and dressing the ulcer, controlling blood sugar levels, and using antibiotics if the ulcer is infected. In severe cases, surgery may be necessary to remove dead tissue or correct deformities."}),(0,a.jsxs)("button",{onClick:()=>{e.push("../../detections/footUlcer_detection")},className:"btn btn-primary",children:["Detect Diabetic Foot Ulcer",(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"ml-2 w-4 h-4",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]})]})}),(0,a.jsx)(i.Z,{})]})}}},function(e){e.O(0,[166,675,424,888,774,179],function(){return e(e.s=2691)}),_N_E=e.O()}]);