# synthloop
## Notes

* These notes are for both updates and learning purposes. I'm using them to log what I struggled with and learned, so I can refer back to them if I ever go through the same problem in the future (and forgot what I did). Some things may seem very obvious here, but that's the best way to learn.


Update (most to least recent):

On sounds:

It took me a long time to figure out how to play sound in a React app (specifically, mp3 files). A lot of stackoverflow posts were outdated or in plain JS (not using React).

Environment I'm using: Firefox, React (also checked in Chrome),

I tried using the Audio element in JS

`const audio = new Audio(filepath);`

and also creating a DOM audio element (something like the code below)

```
const audio = document.createElement('audio');
audio.style.display = 'none';
audio.src = filepath;
document.appendChild(audio);

```

I would keep getting errors like `HTTP “Content-Type” of “text/html” is not supported.`, in Firefox. While I read in many posts that mp3 was not supported by Firefox, this is outdated - Firefox (depends on version and OS, but if you have the latest version and using modern OS like Windows VIsta+ it shouldn't be a problem) now supports mp3 and should be able to play mp3 files. I wanted to strictly use mp3 files, because I didn't want to go through the trouble of finding .ogg files (which has been supported by Firefox much longer) or convert audio (that would cause a legal issue since I'm using free-to-use sound effects).

I found that importing the sound file directly worked:

```
import bubbles from './bubbles.mp3';

const audio = new Audio(bubbles);
audio.play();
```

but this doesn't work if I have dynamic filepaths (the user can change which sound file to use). Also, it's not very pretty to have to import audio files directly in JS.


I decided to focus on this error: `HTTP “Content-Type” of “text/html” is not supported.` (was also getting some errors related to not being able to decode "text/html"). It told me for some reason, the browser couldn't read the file format I was sending or wasn't able to properly load it - even though I know Firefox can play mp3 files (from using that `import bubbles` method above).

It turns out that you need a special file loader, like Webpack, to load mp3 files. I don't yet understand the specifics of this, or how to use Webpack, but I do know that React does this for you if you put the non-html/css/js files you want to use in the public/ folder of the React app.

I also didn't realize that to refer to the public folder, you just started a filepath with a backslash ("/file.mp3"). In my case, I've not put my sounds in a `sound` folder under `public`, so when I play audio, it looks something like this:

```
const audio = new Audio('/sounds/bubbles1.mp3');
audio.play();
```

Ta-da! Sound in a React app!
---

On CSS:

I decided to switch from Pure.css to Milligram. Milligram has a more minimalistic, clean look to me. The aesthetic was my main deciding factor.
(Other factors like size and update-activity are roughly the same, according to https://www.webfx.com/blog/web-design/small-css-frameworks/)

---

On CSS:

I tried to use Pure.css's grid, but it was squishing the text. I decided to just use Flexbox instead of trying to fix the grid. Other components from Pure.css seem to be working fine.

---

See credits at the bottom for sound effects.

Below is the default README generated from create-react-app.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

# Credits

Sound effects obtained from https://freesound.org/