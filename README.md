# Personal Website

A dependency-free static personal website for GitHub Pages or any static host.

## Edit Your Content

Update `index.html` with your real:

- Bio and headline
- Experience
- Projects
- Skills
- Contact links

Current assets:

- Profile photo: `assets/profile.png`
- Resume PDF: `assets/resume.pdf`

To update either file later, replace the file in `assets/` and keep the same filename.

## Preview Locally

You can open `index.html` directly in a browser.

For a local server:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deploy With GitHub Pages

1. Create a GitHub repository, for example `personal-website`.
2. Push this folder to that repository.
3. In GitHub, go to repository `Settings` > `Pages`.
4. Set the source to deploy from the main branch.
5. Wait for GitHub Pages to publish the site.

## Use Your Custom Domain

When your domain is ready:

1. Create a file named `CNAME` in this folder.
2. Put only your domain inside it, for example:

```text
example.com
```

3. Configure DNS at your domain registrar according to GitHub Pages custom domain instructions.
4. Enable HTTPS in GitHub Pages settings once DNS is verified.

`CNAME.example` is included only as a reference. Rename or copy it to `CNAME` when you are ready.
