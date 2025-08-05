// For small projects

// const plansData = [
//   {
//     title: "Starter Plan",
//     price: "$19",
//     shortDesc: "Ideal for small businesses or personal brands.",
//     desc: `
//       <li>1 platform (Instagram or Facebook)</li>
//       <li>4 posts/month</li>
//       <li>Basic SEO optimisation</li>
//       <li>Setup of social media accounts (2 platforms)</li>
//       <li>One month of website maintenance</li>
//       <li>Google Analytics setup and tracking</li>
//       <li>1 hour of consultation</li>
//     `
//   },
//   {
//     title: "Growth Plan",
//     price: "$29",
//     shortDesc: "For growing startups looking for traction.",
//     desc: `
//     <li>2 platforms</li>
//     <li>8 posts/month</li>
//     <li>Basic SEO optimization</li>
//     <li>Setup of social media accounts (2 platforms)</li>
//     <li>One month of website maintenance</li>
//     <li>Google Analytics setup and tracking</li>
//     <li>5 hour of consultation</li>
//     `
//   },
//   {
//     title: "Premium Plan",
//     price: "$49",
//     shortDesc: "Comprehensive marketing for serious growth.",
//     desc: `
//        <li>3 platforms</li>
//       <li>12 posts/month</li>
//       <li>Setup of social media accounts (2 platforms)</li>
//       <li>Complete customize website SEO friendly</li>
//       <li>Paid ads (Google + Meta)</li>
//       <li>One month of website maintenance</li>
//       <li>Google Analytics setup and tracking</li>
//       <li>10 hour of consultation</li>
//     `
//   }
// ];

// const planContainer = document.getElementById('plans-container');

//   plansData.forEach((plan) => {
//     const plans = document.createElement('div');
//     // plans.classList.add('col-md-4');

//     plans.innerHTML = `
//       <div class="col-md-4">
//         <div class="plan-card">
//         <h4 class="plan-title">${plan.title}</h4>
//         <p class="plan-price">${plan.price} /Month</p>
//         <p class="plan-desc">
//           ${plan.shortDesc}
//         </p>
//         <ul class="plan-features text-start">
//           ${plan.desc}
//         </ul>
//         <a href="#" class="btn btn-select">Select Plan →</a>
//       </div>
//       </div>
//     `;
//     planContainer.appendChild(plans);
//   });

