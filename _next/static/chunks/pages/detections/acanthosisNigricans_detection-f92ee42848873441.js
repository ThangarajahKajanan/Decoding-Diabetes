(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[533],{6616:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/detections/acanthosisNigricans_detection",function(){return s(2378)}])},6314:function(e,t){"use strict";t.Z={src:"/_next/static/media/logo.f6a7c8f7.gif",height:800,width:800,blurWidth:0,blurHeight:0}},7634:function(e,t,s){"use strict";var i=s(5893),a=s(7294),n=s(5675),r=s.n(n),l=s(6314);t.Z=function(){return(0,a.useEffect)(()=>{},[]),(0,i.jsxs)("footer",{className:"footer p-10 bg-neutral text-neutral-content",children:[(0,i.jsxs)("aside",{children:[(0,i.jsx)(r(),{src:l.Z,width:150,height:150,alt:"Picture of the author",style:{borderRadius:70}}),(0,i.jsxs)("p",{children:["Decoding Diabetics",(0,i.jsx)("br",{})]})]}),(0,i.jsxs)("nav",{children:[(0,i.jsx)("h6",{className:"footer-title",children:"Social"}),(0,i.jsxs)("div",{className:"grid grid-flow-col gap-4",children:[(0,i.jsx)("a",{children:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"fill-current",children:(0,i.jsx)("path",{d:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"})})}),(0,i.jsx)("a",{children:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"fill-current",children:(0,i.jsx)("path",{d:"M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"})})}),(0,i.jsx)("a",{children:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"fill-current",children:(0,i.jsx)("path",{d:"M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"})})})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{children:"Rate Us"}),(0,i.jsx)("div",{className:"rating",children:[1,2,3,4,5].map(e=>(0,i.jsx)("input",{type:"radio",name:"rating-2",value:e,className:"mask mask-star-2 bg-orange-400"},e))})]})]})]})}},9361:function(e,t,s){"use strict";s.d(t,{Z:function(){return g}});var i=s(5893),a=s(1664),n=s.n(a),r=s(1163),l=s.n(r),o=s(7294),c=s(6455),d=s.n(c),h=s(5675),u=s.n(h),m=s(6314);function g(){let[e,t]=(0,o.useState)(null);(0,o.useEffect)(()=>{let e=sessionStorage.getItem("user");e&&t(e)},[]);let s=async()=>{if(e){if((await d().fire({title:"Are you sure?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Log out"})).isConfirmed)try{await sessionStorage.removeItem("user"),l().push("/login")}catch(e){console.error("Error during handleLogout: ",e),alert("An error occurred during logout. Please try again later.")}}else await sessionStorage.removeItem("user"),l().push("/login")};return(0,i.jsxs)("div",{className:"navbar fixed top-0 left-0 right-0 bg-opacity-75 bg-base-300 text-neutral z-50",children:[(0,i.jsxs)("div",{className:"navbar-start",children:[(0,i.jsx)("a",{className:"btn btn-ghost text-lg",children:"Decoding Diabetics"}),(0,i.jsx)(u(),{src:m.Z,width:70,height:70,alt:"Picture of the author",style:{borderRadius:70}})]}),(0,i.jsx)("div",{className:"navbar-center hidden lg:flex  text-gray-700 ",children:(0,i.jsx)("ul",{className:"menu menu-horizontal  pl-16 ml-6",children:e?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("li",{children:(0,i.jsx)(n(),{href:"/",children:(0,i.jsx)("b",{className:" text-base hover:text-sky-800",children:" Home"})})}),(0,i.jsx)("li",{children:(0,i.jsx)(n(),{href:"/detections/acanthosisNigricans_detection",children:(0,i.jsx)("b",{className:" text-base hover:text-sky-800",children:" Acanthosis Nigricans Detection"})})}),(0,i.jsx)("li",{children:(0,i.jsx)(n(),{href:"/detections/footUlcer_detection",children:(0,i.jsx)("b",{className:" text-base hover:text-sky-800",children:" Foot Ulcer Detection"})})}),(0,i.jsx)("li",{children:(0,i.jsx)(n(),{href:"/detections/nailDefects_detection",children:(0,i.jsx)("b",{className:" text-base hover:text-sky-800",children:" Nail Infection Detection"})})}),(0,i.jsx)("li",{children:(0,i.jsx)(n(),{href:"https://diabetic-retinopathy-phi.vercel.app/",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)("b",{className:" text-base hover:text-sky-800",children:"  Retinopathy Detection"})})})]}):(0,i.jsx)(i.Fragment,{})})}),(0,i.jsx)("div",{className:"navbar-end",onClick:s,children:(0,i.jsx)("a",{className:"btn  bg-blue-400",children:e?"Log out":"Log in"})})]})}},2378:function(e,t,s){"use strict";s.r(t);var i=s(5893),a=s(7294),n=s(7066),r=s(6455),l=s.n(r),o=s(9361),c=s(7634);t.default=function(){let[e,t]=(0,a.useState)(null),[s,r]=(0,a.useState)(null),[d,h]=(0,a.useState)(!1),[u,m]=(0,a.useState)(null),g=async()=>{if(s){let e=new FormData;e.append("image",s),l().fire({title:"Processing...",html:'<div class="swal1-spinner" inline-block; width: 3em; height: 3em; border: 0.4em solid #ccc; border-right-color: transparent; border-radius: 50%; animation: spin 1s linear infinite;"></div>',allowOutsideClick:!1,showCancelButton:!1,showConfirmButton:!1,didOpen:()=>{l().showLoading()}});try{let t=await n.Z.post("https://us-central1-diabetes-detection-430811.cloudfunctions.net/acanthosis_nigricans",e,{headers:{"Content-Type":"multipart/form-data"}});if(l().close(),console.log("File uploaded successfully:",t.data),"Enter a valid Image"===t.data.error){l().fire("Error..!","Enter a valid Image","error");return}let s=t.data.detections[0];s&&m({class:s.class,confidence:s.confidence})}catch(e){l().close(),console.error("Error uploading file:",e),l().fire({icon:"error",title:"Error",text:"An error occurred while processing the image. Please try again later."})}}};return(0,i.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,i.jsx)(o.Z,{}),(0,i.jsx)("div",{className:"flex-grow h-[50vh] pb-10",children:d?(0,i.jsxs)("div",{className:"flex flex-col items-center mt-10",children:[(0,i.jsxs)("div",{className:"relative w-64 h-64 overflow-hidden rounded-lg shadow-md mt-16",children:[e&&(0,i.jsx)("img",{src:e,alt:"Uploaded preview",className:"object-cover w-full h-full"}),(0,i.jsx)("button",{className:"absolute top-2 right-2 px-2 py-1 bg-gray-700 text-white rounded-md shadow-md hover:bg-gray-800 transition duration-300 ease-in-out",onClick:()=>{t(null),r(null),h(!1),m(null)},children:"Clear"})]}),(0,i.jsx)("button",{className:"mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out",onClick:g,children:"Process Image"})]}):(0,i.jsxs)("div",{className:"border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center mt-20 mx-20",onDrop:e=>{if(e.preventDefault(),e.dataTransfer.files&&e.dataTransfer.files[0]){let s=e.dataTransfer.files[0];s.type.startsWith("image/")&&(t(URL.createObjectURL(s)),r(s),h(!0))}},onDragOver:e=>{e.preventDefault()},children:[(0,i.jsx)("div",{className:"mb-4",children:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:"w-12 h-12 text-gray-400",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})})}),(0,i.jsx)("div",{className:"text-lg text-gray-600",children:"Drag and drop your image here or"}),(0,i.jsx)("button",{className:"mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out",onClick:()=>{let e=document.getElementById("fileInput");null==e||e.click()},children:"Browse"}),(0,i.jsx)("br",{}),(0,i.jsx)("div",{className:"text-lg text-gray-600",children:"to detect Acanthosis Nigricans"}),(0,i.jsx)("input",{id:"fileInput",type:"file",className:"hidden",onChange:e=>{if(e.target.files&&e.target.files[0]){let s=e.target.files[0];s.type.startsWith("image/")&&(t(URL.createObjectURL(s)),r(s),h(!0))}}})]})}),u&&(0,i.jsx)("div",{className:"flex justify-center mt-8",children:(()=>{if(u){let{class:e,confidence:t}=u,s=Math.round(100*t);switch(e){case"Acanthosis Nigricans":return(0,i.jsxs)("div",{className:"border border-gray-300 rounded-lg p-4 shadow-md w-full md:w-1/2 lg:w-1/3 hover:bg-black hover:text-white transition duration-300 ease-in-out",children:[(0,i.jsx)("h2",{className:"text-lg font-bold mb-4",children:"Detection Results"}),(0,i.jsxs)("div",{className:"text-lg font-bold mb-2",children:[(0,i.jsx)("span",{className:" text-green-600 text-xl  mr-4",children:e}),": ",(0,i.jsxs)("span",{className:" text-gray-400  text-base",children:[s,"% confidence"]})]}),(0,i.jsx)("p",{className:"text-red-500  font-semibold mb-2",children:"*The system detects signs of diabetic-related acanthosis nigricans."}),(0,i.jsx)("div",{className:"text-lg font-bold mt-4",children:"Instructions:"}),(0,i.jsxs)("ul",{className:"list-disc pl-6",children:[(0,i.jsx)("li",{children:"Reduce foods that contain sugar and sweetness."}),(0,i.jsx)("li",{children:"Immediately meet your family doctor."}),(0,i.jsx)("li",{children:"Do a diabetic checkup. (FBS - Fasting Blood Sugar)"})]}),(0,i.jsx)("div",{className:"mt-6 text-blue-600 ",children:s>=90&&s<=100?"The system is highly confident that your neck shows clear signs of diabetes. Immediate consultation with a healthcare provider is strongly recommended.":s>=80&&s<90?"The system has a strong likelihood that your neck shows signs commonly associated with diabetes. A doctor's appointment is advisable to confirm this and plan next steps.":s>=75&&s<80?"The system detects noticeable signs associated with a diabetic foot ulcer. Seeking medical advice soon would help to you.":s>=60&&s<75?"The system suggests a moderate probability that your foot has signs that could be linked to diabetes. Further testing by a healthcare provider is recommended for clarity.":s>=45&&s<60?"The system shows moderate confidence in detecting diabetes signs. Some markers suggest potential diabetes, though they're not as distinct. Checking with a doctor could provide reassurance.":s<45?"The system is not confident that you have diabetes. However, it's still a good idea to consult a healthcare professional.":null})]});case"Healthy":return(0,i.jsxs)("div",{className:"border border-gray-300 rounded-lg p-4 shadow-md w-full md:w-1/2 lg:w-1/3 hover:bg-black hover:text-white transition duration-300 ease-in-out",children:[(0,i.jsx)("h2",{className:"text-lg font-bold mb-4",children:"Detection Results"}),(0,i.jsxs)("div",{className:"text-lg font-bold mb-2",children:[(0,i.jsx)("span",{className:" text-green-600 text-xl  mr-4",children:e}),": ",(0,i.jsxs)("span",{className:" text-gray-400  text-base",children:[s,"% confidence"]})]}),(0,i.jsx)("p",{className:"text-lg mt-4",children:"No specific medicine or nutrition advice needed for a healthy condition."}),(0,i.jsx)("div",{className:"mt-6 text-blue-600 ",children:s>=90&&s<=100?"The system is very confident that your neck does not show signs of diabetes. Keep up the healthy lifestyle and continue routine health check-ups.":s>=80&&s<90?"There is a strong likelihood that you do not have a diabetic condition. Monitoring your health regularly is still recommended.":s>=75&&s<80?"The system suggests a low risk of diabetes-related conditions. Maintaining a healthy routine is advised.":s>=60&&s<75?"The confidence level indicates a moderate chance that you are not at risk for diabetes, though regular check-ups are still a good practice.":s>=45&&s<60?"The system suggests that diabetes is unlikely, but routine health check-ups can provide additional peace of mind.":s<45?"The system has low confidence in determining your health condition. Continue monitoring your health, and consult a healthcare professional if you have any concerns.":null})]})}}return null})()}),(0,i.jsx)(c.Z,{})]})}}},function(e){e.O(0,[166,675,424,642,66,888,774,179],function(){return e(e.s=6616)}),_N_E=e.O()}]);