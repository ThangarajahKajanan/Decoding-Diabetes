(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[316],{4580:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/aboutInfections/aboutAN",function(){return t(735)}])},6314:function(e,s){"use strict";s.Z={src:"/_next/static/media/logo.f6a7c8f7.gif",height:800,width:800,blurWidth:0,blurHeight:0}},7634:function(e,s,t){"use strict";var i=t(5893),n=t(7294),a=t(5675),r=t.n(a),l=t(6314);s.Z=function(){return(0,n.useEffect)(()=>{},[]),(0,i.jsxs)("footer",{className:"footer p-10 bg-neutral text-neutral-content",children:[(0,i.jsxs)("aside",{children:[(0,i.jsx)(r(),{src:l.Z,width:150,height:150,alt:"Picture of the author",style:{borderRadius:70}}),(0,i.jsxs)("p",{children:["Decoding Diabetics",(0,i.jsx)("br",{})]})]}),(0,i.jsxs)("nav",{children:[(0,i.jsx)("h6",{className:"footer-title",children:"Social"}),(0,i.jsxs)("div",{className:"grid grid-flow-col gap-4",children:[(0,i.jsx)("a",{children:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"fill-current",children:(0,i.jsx)("path",{d:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"})})}),(0,i.jsx)("a",{children:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"fill-current",children:(0,i.jsx)("path",{d:"M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"})})}),(0,i.jsx)("a",{children:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"fill-current",children:(0,i.jsx)("path",{d:"M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"})})})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{children:"Rate Us"}),(0,i.jsx)("div",{className:"rating",children:[1,2,3,4,5].map(e=>(0,i.jsx)("input",{type:"radio",name:"rating-2",value:e,className:"mask mask-star-2 bg-orange-400"},e))})]})]})]})}},9361:function(e,s,t){"use strict";t.d(s,{Z:function(){return g}});var i=t(5893),n=t(1664),a=t.n(n),r=t(1163),l=t.n(r),c=t(7294),o=t(6455),d=t.n(o),h=t(5675),x=t.n(h),m=t(6314);function g(){let[e,s]=(0,c.useState)(null);(0,c.useEffect)(()=>{let e=sessionStorage.getItem("user");e&&s(e)},[]);let t=async()=>{if(e){if((await d().fire({title:"Are you sure?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Log out"})).isConfirmed)try{await sessionStorage.removeItem("user"),l().push("/login")}catch(e){console.error("Error during handleLogout: ",e),alert("An error occurred during logout. Please try again later.")}}else await sessionStorage.removeItem("user"),l().push("/login")};return(0,i.jsxs)("div",{className:"navbar fixed top-0 left-0 right-0 bg-opacity-75 bg-base-300 text-neutral z-50",children:[(0,i.jsxs)("div",{className:"navbar-start",children:[(0,i.jsx)("a",{className:"btn btn-ghost text-lg",children:"Decoding Diabetics"}),(0,i.jsx)(x(),{src:m.Z,width:70,height:70,alt:"Picture of the author",style:{borderRadius:70}})]}),(0,i.jsx)("div",{className:"navbar-center hidden lg:flex  text-gray-700 ",children:(0,i.jsx)("ul",{className:"menu menu-horizontal  pl-16 ml-6",children:e?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("li",{children:(0,i.jsx)(a(),{href:"/",children:(0,i.jsx)("b",{className:" text-base hover:text-sky-800",children:" Home"})})}),(0,i.jsx)("li",{children:(0,i.jsx)(a(),{href:"/detections/acanthosisNigricans_detection",children:(0,i.jsx)("b",{className:" text-base hover:text-sky-800",children:" Acanthosis Nigricans Detection"})})}),(0,i.jsx)("li",{children:(0,i.jsx)(a(),{href:"/detections/footUlcer_detection",children:(0,i.jsx)("b",{className:" text-base hover:text-sky-800",children:" Foot Ulcer Detection"})})}),(0,i.jsx)("li",{children:(0,i.jsx)(a(),{href:"/detections/nailDefects_detection",children:(0,i.jsx)("b",{className:" text-base hover:text-sky-800",children:" Nail Infection Detection"})})}),(0,i.jsx)("li",{children:(0,i.jsx)(a(),{href:"https://diabetic-retinopathy-phi.vercel.app/",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)("b",{className:" text-base hover:text-sky-800",children:"  Retinopathy Detection"})})})]}):(0,i.jsx)(i.Fragment,{})})}),(0,i.jsx)("div",{className:"navbar-end",onClick:t,children:(0,i.jsx)("a",{className:"btn  bg-blue-400",children:e?"Log out":"Log in"})})]})}},735:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return d}});var i=t(5893);t(7294);var n=t(9361),a=t(7634),r={src:"/_next/static/media/learnmoreAN1.ba4c3d2a.webp",height:900,width:1200,blurDataURL:"data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAAAwAgCdASoIAAYAAkA4JQBOj+EYAAofo53OwAD+9f4VVVssCoLZPN4NwLA1qwdhNXFcVf4PBA6icOxxJ8yK+JzaGxCH59rMw0kbCUAA",blurWidth:8,blurHeight:6},l=t(5675),c=t.n(l),o=t(1163),d=function(){let e=(0,o.useRouter)();return(0,i.jsxs)("div",{className:"flex flex-col min-h-screen mt-20",children:[(0,i.jsx)(n.Z,{}),(0,i.jsx)("main",{className:"flex-grow flex flex-col items-center justify-center p-4",children:(0,i.jsxs)("div",{className:"max-w-3xl bg-white rounded-lg shadow-lg p-6",children:[(0,i.jsx)("h1",{className:"text-2xl md:text-4xl font-bold text-center mb-6",children:"Understanding Diabetic Acanthosis Nigricans in the Neck Area"}),(0,i.jsx)(c(),{src:r,alt:"Acanthosis Nigricans",className:"w-full h-[450px] rounded-lg shadow-md mb-6"}),(0,i.jsx)("h2",{className:"text-xl md:text-2xl font-semibold mb-4",children:"What is Acanthosis Nigricans?"}),(0,i.jsx)("p",{className:"text-lg text-gray-700 leading-relaxed mb-4",children:"Acanthosis Nigricans is a skin condition characterized by dark, thick, and velvety patches that commonly appear in the folds and creases of the skin. In people with diabetes, these patches are often found on the neck, armpits, and groin. The condition is usually a sign of insulin resistance, which is a key feature of type 2 diabetes."}),(0,i.jsx)("div",{className:"w-full rounded-lg overflow-hidden shadow-md mb-6",children:(0,i.jsx)("iframe",{className:"w-full h-64 md:h-96",src:"https://www.youtube.com/embed/wmWOdcZ7Uc4?rel=0",title:"Acanthosis Nigricans Video",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),(0,i.jsx)("h2",{className:"text-xl md:text-2xl font-semibold mb-4",children:"Causes of Acanthosis Nigricans in Diabetics"}),(0,i.jsx)("p",{className:"text-lg text-gray-700 leading-relaxed mb-4",children:"In individuals with diabetes, Acanthosis Nigricans is primarily caused by insulin resistance. When the body becomes resistant to insulin, it produces more insulin to compensate. High levels of insulin in the bloodstream can trigger the rapid growth of skin cells, leading to the thick, dark patches associated with Acanthosis Nigricans."}),(0,i.jsx)("h2",{className:"text-xl md:text-2xl font-semibold mb-4",children:"Symptoms and Appearance"}),(0,i.jsx)("p",{className:"text-lg text-gray-700 leading-relaxed mb-4",children:"The neck is one of the most common areas where Acanthosis Nigricans appears in diabetics. The skin may become darker, thicker, and have a velvety texture. These patches can sometimes feel itchy or have an odor, but they are generally not painful."}),(0,i.jsx)("h2",{className:"text-xl md:text-2xl font-semibold mb-4",children:"Prevention and Management"}),(0,i.jsx)("p",{className:"text-lg text-gray-700 leading-relaxed mb-4",children:"Preventing Acanthosis Nigricans involves managing the underlying insulin resistance and maintaining healthy blood sugar levels. Here are some key strategies:"}),(0,i.jsxs)("ul",{className:"list-disc list-inside text-lg text-gray-700 leading-relaxed mb-4",children:[(0,i.jsx)("li",{children:"Maintain a balanced diet low in sugars and refined carbohydrates."}),(0,i.jsx)("li",{children:"Engage in regular physical activity to improve insulin sensitivity."}),(0,i.jsx)("li",{children:"Monitor and manage your blood sugar levels regularly."}),(0,i.jsx)("li",{children:"Work with your healthcare provider to manage your diabetes effectively."})]}),(0,i.jsx)("h2",{className:"text-xl md:text-2xl font-semibold mb-4",children:"Treatment Options"}),(0,i.jsx)("p",{className:"text-lg text-gray-700 leading-relaxed mb-4",children:"While Acanthosis Nigricans itself is not dangerous, it is a sign that you need to address the underlying condition causing it. Treatment focuses on managing insulin resistance and improving the appearance of the affected skin. Here are some common treatment options:"}),(0,i.jsxs)("ul",{className:"list-disc list-inside text-lg text-gray-700 leading-relaxed mb-4",children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"Topical treatments:"})," Creams containing ingredients like retinoids or vitamin D can help lighten the skin and reduce thickness."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"Oral medications:"})," In some cases, medications that improve insulin sensitivity, such as metformin, may be prescribed."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"Weight management:"})," Losing weight can significantly reduce insulin resistance and improve skin condition."]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("strong",{children:"Laser therapy:"})," Laser treatments may be used to reduce the thickness and darkness of the patches."]})]}),(0,i.jsx)("p",{className:"text-lg text-gray-700 leading-relaxed mb-4",children:"It's important to consult with a healthcare provider for a personalized treatment plan. Addressing the underlying cause of Acanthosis Nigricans is crucial for both skin health and overall well-being."}),(0,i.jsxs)("button",{onClick:()=>{e.push("../../detections/acanthosisNigricans_detection")},className:"btn btn-primary",children:["Detect Acanthosis Nigricans",(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"ml-2 w-4 h-4",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]})]})}),(0,i.jsx)(a.Z,{})]})}}},function(e){e.O(0,[166,675,424,888,774,179],function(){return e(e.s=4580)}),_N_E=e.O()}]);