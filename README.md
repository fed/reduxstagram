# Reduxstagram

React + Redux example from the [Learn Redux](http://learnredux.com/) course by [Wes Bos](https://github.com/wesbos).

![Reduxstagram](http://i.imgur.com/0tdciMM.png)

## Building

| Command         | Description                                                                          |
|-----------------|--------------------------------------------------------------------------------------|
| `npm install`   | Grab all the necessary dependencies.                                                 |
| `npm start`     | Start dev server. App will go live on [http://localhost:6789](http://localhost:6789) |
| `npm run build` | Create a `dist` folder and a `bundle.js` file.                                       |

## Release Versions

Follow these steps to have your feature branch merged:

1. `git fetch`
2. `git checkout develop && git reset --hard origin/develop`
3. `npm version [<newversion> | major | minor | patch]`
4. `git checkout master && git reset --hard origin/master`
5. `git merge develop`
6. `git push --tags && git push && git checkout develop && git push`

## Semantic Versioning

Given a version number `MAJOR.MINOR.PATCH`, increment the:

1. `MAJOR` version when you make incompatible API changes,
2. `MINOR` version when you add functionality in a backwards-compatible manner, and
3. `PATCH` version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata [are available](https://docs.npmjs.com/cli/version) as extensions to the `MAJOR.MINOR.PATCH` format.

See the [Semantic Versioning](http://semver.org/) specification for more information.
