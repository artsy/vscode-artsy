# VSCode + Artsy

This extension pack consolidates all of our recommended VS Code extensions. You only need to install this extension, and then all of the other extensions we use will be managed for you.

### Meta

* **State:** production
* **Production:** [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=Artsy.artsy-studio-extension-pack)
* **Point People:** 

## How do I install it?

Install it from the [marketplace](https://marketplace.visualstudio.com/items?itemName=Artsy.artsy-studio-extension-pack), or you can install it from the CLI:

```sh
code --install-extension Artsy.artsy-studio-extension-pack
```

## What is this repo?

The only thing that really matters here is the [`package.json`](/package.json). As we can't have comments in the file, here is the list of extensions:

#### Artsy Studio

- [Styled Components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)
- [Dotenv](https://github.com/mikestead/vscode-dotenv)
- [GraphQL](https://github.com/apollographql/apollo-tooling)
- [Relay](https://marketplace.visualstudio.com/items?itemName=meta.relay)
- [NPM intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint)
- [TypeScript Grammar](https://marketplace.visualstudio.com/items?itemName=ms-vscode.typescript-javascript-grammar)
- [Pretty TypeScript Errors](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors)

### React Native

- [React Native Tools](https://marketplace.visualstudio.com/items?itemName=vsmobile.vscode-react-native)

### Ruby 

- [Danger](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-danger)
- [Ruby](https://marketplace.visualstudio.com/items?itemName=rebornix.Ruby)
- [Rubocop](https://marketplace.visualstudio.com/items?itemName=misogi.ruby-rubocop)

### Other Platform Support

- [Elixir](https://marketplace.visualstudio.com/items?itemName=mjmcloug.vscode-elixir)

### Debugging

- [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)
- [Live Share Audio](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-audio)
- [Gremlins](https://github.com/nhoizey/vscode-gremlins) (highlights unwanted characters in code)
- [TODO: Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight)
- [Open in GitHub](https://marketplace.visualstudio.com/items?itemName=ziyasal.vscode-open-in-github)


### Legacy

- [Scss](https://marketplace.visualstudio.com/items?itemName=robinbentley.sass-indented)
- [Stylus](https://marketplace.visualstudio.com/items?itemName=sysoev.language-stylus)


## Deployment

### Using the terminal
The docs from Microsoft are good here, use [them for reference](https://code.visualstudio.com/docs/extensions/publish-extension#_login-to-a-publisher).

1. You will need to set up a visualstudio.com account
1. You will need to have that email added to the vscode extension publishing team.
    1. Log in to [manage users here](https://marketplace.visualstudio.com/manage/publishers/artsy)
1. You then log in to the Artsy publisher account, using your personal access token from your visualstudios.com account:
    
    ```sh 
    $ npx vsce login Artsy
    npx: installed 63 in 4.231s
    Personal Access Token for publisher 'Artsy': ****************************************************

    Authentication successful. Found publisher 'Artsy Open Source'.
    ```

1. Change the package.json version number
1. Run `npx vsce publish`

### Using the Visual Studio Marketplace 

1. Connect to mobile@ Visual Studio account. 
2. Navigate to the directory of the extension
3. Run `npx vsce package`. This will create a `.vsix` file in the root of the extension directory
4. Go to the [marketplace](https://marketplace.visualstudio.com/manage/publishers/artsy). Tap on the Meatballs Icon (...) next to to `Artsy Omakase Extension Pack` and click `Update`.
5. Select the `.vsix` file you just created.

It should take only a few minutes for the extension to be published. 

<details>
<summary>Publishing an update</summary>

  ![publishing-an-update](./screenshots/publishing_an_update.gif/)
</details>

## Adding More People to Deploy

Go to [TFS settings](https://artsy-open-source.visualstudio.com/_settings/users) and add them as someone with rights
to package management for extensions.
