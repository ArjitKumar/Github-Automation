// npm init -y
// npm install minimist
// npm install puppeteer

// node Hackerrankautomation.js --url=https://www.hackerrank.com/ --config=config.json

let minimist  = require('minimist');
let fs  = require('fs');
let puppeteer  = require('puppeteer');
let args  = minimist(process.argv);
// let nodemailer = require('nodemailer');



// let code = {
//     code1 : `import java.util.*;
//     import java.io.*;
    
//     class Node {
//         Node left;
//         Node right;
//         int data;
        
//         Node(int data) {
//             this.data = data;
//             left = null;
//             right = null;
//         }
//     }
    
//     class Solution {
    
//     /* you only have to complete the function given below.  
//     Node is defined as  
    
//     class Node {
//         int data;
//         Node left;
//         Node right;
//     }
    
//     */
    
//         public static void preOrder(Node root) {
//      if (root == null)
//                 return;
     
            
//             System.out.print(root.data + " ");
     
            
//             preOrder(root.left);
     
          
//             preOrder(root.right);
//         }
    
//         public static Node insert(Node root, int data) {
//             if(root == null) {
//                 return new Node(data);
//             } else {
//                 Node cur;
//                 if(data <= root.data) {
//                     cur = insert(root.left, data);
//                     root.left = cur;
//                 } else {
//                     cur = insert(root.right, data);
//                     root.right = cur;
//                 }
//                 return root;
//             }
//         }
    
//         public static void main(String[] args) {
//             Scanner scan = new Scanner(System.in);
//             int t = scan.nextInt();
//             Node root = null;
//             while(t-- > 0) {
//                 int data = scan.nextInt();
//                 root = insert(root, data);
//             }
//             scan.close();
//             preOrder(root);
//         }	
//     }`
// }
// let jso = 
// {
//     email : 'ajju9990.ak@gmail.com',
//     password : 'ajju1802',
//     moderator : 'navdeep_usict',
//     moderator2 : 'sky16051988' ,
//     moderator3 : 'programmer_149',
//     moderator4 :'rahul971801',

// }


// // let jso = fs.readFileSync(args.config, " utf-8");
// // let json  = JSON.parse(jso);

// async function run() {
//                let browser =  await puppeteer.launch({
//                 // executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe', 
//                 headless : false,
//               defaultViewport : null,   // windows k andar content full khul rha h
//             args : ['--start-maximized'] // windows full khul rhi h
//           });

//           let pages = await browser.pages(); // getting a tab and function used is pages
//           let page = pages[0];  // taking the first page or tab
          
//           await page.goto("https://www.google.com/");  // goto the url

//           await page.waitForSelector('input[type="text"]');
//           await page.click('input[type="text"]');
//           await page.type('input[type="text"]',args.url,{delay : 80});
//           await page.keyboard.press('Enter');


//           await page.waitForSelector('a[href="https://www.hackerrank.com/"]');
//           await page.click('a[href="https://www.hackerrank.com/"]');



//           await page.waitForSelector('a[data-event-action="Login"]');
//           await page.click('a[data-event-action="Login"]');


//           await page.waitForSelector('a[href="https://www.hackerrank.com/login"]');
//           await page.click('a[href="https://www.hackerrank.com/login"]');


//           await page.waitForSelector('input[placeholder="Your username or email"]');
//           await page.click('input[placeholder="Your username or email"]');
//           await page.type('input[placeholder="Your username or email"]',jso.email,{delay: 80});


//           await page.waitForSelector('input[placeholder="Your password"]');
//           await page.click('input[placeholder="Your password"]');
//           await page.type('input[placeholder="Your password"]',jso.password,{delay: 80});

//           await page.waitForSelector('button[type="submit"]');
//           await page.click('button[type="submit"]');


//           await page.waitForSelector('a[data-analytics="NavBarContests"]');
//           await page.click('a[data-analytics="NavBarContests"]');



//           await page.waitForSelector('a[href="/administration/contests/"]');
//           await page.click('a[href="/administration/contests/"]');


//           await page.waitForSelector('p.mmT');
//           await page.click('p.mmT');
          

//            await page.waitForSelector('li[data-tab="moderators"] > a.cursor');
//           await page.click('li[data-tab="moderators"] > a.cursor');

//           await page.waitForSelector('button#cancelBtn');
//           await page.click('button#cancelBtn');



          

//           // await page.waitForSelector('li[data-tab="moderators"]');
//           // await page.click('li[data-tab="moderators"]');

//           // await page.waitForSelector('button#confirmBtn');
//           // await page.click('button#confirmBtn');

//           await page.waitForSelector('input#moderator');
//           await page.click('input#moderator');
//           await page.type('input#moderator',jso.moderator4,{delay: 20});

//           await page.waitForSelector('div.input-btn-group > button.moderator-save');
//           await page.click('div.input-btn-group > button.moderator-save');
//           await page.screenshot({ path: 'example.png' });
//         //   await page.pdf({ path: "./google.pdf", format: "Letter" });
          













//           // browser.close();


//         //   sendNotification();

// };
// run();





// const nodemailer = require('nodemailer');

// let transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: false,
//     requireTLS: true,
//     auth: {
//         user: 'ajju9990.ak@gmail.com',
//         pass: 'ajju1802'
//     }
// });

// let mailOptions = {
//     from: 'ajju9990.ak@gmail.com',
//     to: 'singharjit1802@gmail.com',
//     subject: 'Moderator successfulyy added',
//     text: 'Addition of moderator is successful for details you can check the image below',
//     attachments: [{
//         filename: 'example.png',
//         path: 'D:/Pepcoding Web D/FJPActivity2' + '/example.png',
//         // contentType: 'application/pdf'
//       }],
// };

// transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//         return console.log(error.message);
//     }
//     console.log('success');
// });



















let my = {
    email : 'ajju9990.ak@gmail.com',
    pass : 'ajju1802',
    repo : 'new_githup_repo'
}
async function run() {
                   let browser =  await puppeteer.launch({
                    // executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe', 
                    headless : false,
                  defaultViewport : null,   // windows k andar content full khul rha h
                args : ['--start-maximized'] // windows full khul rhi h
              });
    
              let pages = await browser.pages(); // getting a tab and function used is pages
              let page = pages[0];  // taking the first page or tab
              
              await page.goto("https://github.com/login");  // goto the url
              await page.waitForSelector('input#login_field');
              await page.type('input#login_field',my.email,{delay : 50});
              
     
            //   await page.goto("https://github.com/login");  // goto the url
              await page.waitForSelector('input#password');
              await page.type('input#password',my.pass,{delay : 50});
              

              await page.waitForSelector('input[data-signin-label="Sign in"]');
              await page.click('input[data-signin-label="Sign in"]');

     
            //   href="/new"
              await page.waitForSelector('a[data-hydro-click-hmac="ff024f7e49ca9923fec6f0df5483f972f5298d1c4938bc2200914d13e8d18a25"');
              await page.click('a[data-hydro-click-hmac="ff024f7e49ca9923fec6f0df5483f972f5298d1c4938bc2200914d13e8d18a25"');



            //   id="repository_name"

              await page.waitForSelector('input#repository_name');
              await page.click('input#repository_name');
              await page.type('input#repository_name',my.repo,{delay : 50});

            //   data-disable-with="Creating repository&amp;hellip;"
            // await page.waitFor(50000);

            //   await page.waitForSelector('button[type="submit"]');
            //   await page.click('button[type="submit"]');

              const yes = await page.waitForSelector(".btn-primary:not([disabled])");
              await yes.click();

            //   href="/ArjitKumar/new_githup_repo/upload"

              
              await page.waitForSelector('a[href="/ArjitKumar/new_githup_repo/upload"]');
              await page.click('a[href="/ArjitKumar/new_githup_repo/upload"]');
              
const [fileChooser] = await Promise.all([
    page.waitForFileChooser(),
    // page.waitForSelector('input#upload-manifest-files-input'),
    // page.click('[aria-label="Choose your files"]'),
  ]);

await fileChooser.accept(['D:/Pepcoding Web D/FJPActivity2/example.png', 'D:/Pepcoding Web D/FJPActivity2/package.json','D:/Pepcoding Web D/FJPActivity2/config.json']);

// button data-edit-text="Commit changes"
await page.waitFor(10000);
await page.waitForSelector('button[data-edit-text="Commit changes"]');
await page.click('button[data-edit-text="Commit changes"]');





    
    };
    run();













