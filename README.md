<p align="center">
  <img src="/public/favicon.svg" width="50" alt="Logo" />
</p>
<h1 align="center">Quoralinex (Q1X) portfolio</h1>

[![Site preview](/public/site-preview.png)](https://q1x-portfolio-admin.q1x.xyz)

A Remix + Vite single-page portfolio for Quoralinex (Q1X), covering AquaCore R&D, Sentinel-X protective systems, CPMS, and consultancy services. View the [live site](https://q1x-portfolio-admin.q1x.xyz).

## Install & run

Make sure you have nodejs `19.9.0` or higher and npm `9.6.3` or higher installed. Install dependencies with:

```bash
npm install
```

Once it's done start up a local server with:

```bash
npm run dev
```

To view the components storybook:

```bash
npm run dev:storybook
```

## Deployment

I've set up the site using Cloudflare for hosting. Deploy the site to Cloudflare Pages:

```bash
npm run deploy
```

## Permissions

Feel free to fork and adapt the code for your own projects; please rebrand the visuals and content so it’s distinct from Quoralinex (Q1X).

## FAQs

<details>
  <summary>How do I change the color on the <code>DisplacementSphere</code> (blobby rotating thing in the background).</summary>

  Update the fragment shader used by the displacement sphere in `app/routes/home/displacement-sphere/shaders/fragment.glsl`.
</details>

<details>
  <summary>How do I get the contact form to work?</summary>
  
  To get the contact form working create an AWS account and set up SES (Simple Email service). Then plug in your details into `.dev.vars.example` and rename it to `.dev.vars`. You'll also need to add these as enviroment variables in the Cloudflare dashboard for it to work in production. Or if you don't mind sending through gmail use [nodemailer](https://nodemailer.com/) instead.
</details>
