# Flank

# flank links

[Flank on vercel production build](https://flank.vercel.app/)
[Storybook](https://flank-storybook.netlify.app/)

## badge

[![Netlify Status](https://api.netlify.com/api/v1/badges/020f310e-3698-49ef-813c-2b117cc8d8e3/deploy-status)](https://app.netlify.com/sites/flank-next/deploys)

### Swagger API link

<https://flank-sowecanjustbefriends.azurewebsites.net/api/index.html>
[swagger](https://flank-sowecanjustbefriends.azurewebsites.net/swagger/v1/swagger.json)

# TODO

<https://headlessui.dev/react>
<https://heroicons.dev/>

```bash
git config core.ignorecase false
```

<https://jakearchibald.github.io/svgomg/> svg optimizer
<https://react-svgr.com/playground/> svg to component

## TODO: Components

- [x] [Anchor](#anchor)
- [x] [Avatar](#avatar)
- [ ] [BackIcon](#backicon)
- [x] [Button](#button)
- [ ] [CloseButton](#closebutton)
- [ ] [Confirmation](#confirmation)
- [ ] [Currency](#currency)
- [ ] [DirectionLabel](#directionlabel)
- [x] [GButton](#gbutton)
- [ ] [HistoryMessage](#historymessage)
- [ ] [InfoTitle](#infotitle)
- [x] [InputError](#inputerror)
- [ ] [Label](#label)
- [ ] [LaunchIcon](#launchicon)
- [ ] [LoanTitle](#loantitle)
- [ ] [Logo](#logo)
- [ ] [Menu](#menu)
- [ ] [MoneyInput](#moneyinput)
- [ ] [PactIcon](#pacticon)
- [ ] [Paragraph](#paragraph)
- [ ] [ProgressBar](#progressbar)
- [ ] [SelectInput](#selectinput)
- [ ] [Speed](#speed)
- [ ] [Subtitle](#subtitle)
- [ ] [TextInput](#textinput)
- [x] [Title](#title)
- [ ] [Username](#username)

## Components Reference

## Elements

### Anchor

![anchor](/components/elements/Anchor/default-uppercase.png) ![anchor](/components/elements/Anchor/default-lowercase.png)

- Props:
  - text
  - case can be uppercase or lowercase

### Avatar

- State:

  - small menu avatar can be active or not

- Props:
  - size is large or small (menu) - large is editable, small links to profile
    ![avatar](/components/elements/Avatar/large.png)
    ![avatar](/components/elements/Avatar/small-active.png) ![avatar](/components/elements/Avatar/small-inactive.png)

### BackIcon

![back icon](/components/elements/BackIcon/default-active.png) ![back icon](/components/elements/BackIcon/default-inactive.png)

- State:
  - can be active or not
- No props

### Button

![button](/components/elements/Button/default-purple.png)

- States:
  - "mousedown" _(design unconfirmed)_
- Props:
  - text
  - type: button or submit
  - purple or green border/color
  - case can be uppercase or none/default
    ![button](/components/elements/Button/lowercase-unconfirmed.png)

NB: currently at fixed width for uppercase and variable for normal case. Suggestion from CT: normalize both to get width from padding.

### CloseButton

**_unconfirmed_**
![CloseButton](/components/elements/CloseButton/default.png)

- No Props

### Confirmation

![confirmation](/components/elements/Confirmation/default.png)

- Props:
  - text

### Currency

![currency](/components/elements/Currency/default.png)

- No props

### DirectionLabel

![DirectionLabel](/components/elements/DirectionLabel/default.png)

- Props:
  - text can either be "to:" or "from:"

### GButton

![gbutton](/components/elements/GButton/default.png)

- States:
  - "mousedown" _(design unconfirmed)_
- No props

### HistoryMessage

![HistoryMessage](/components/elements/HistoryMessage/default.png)

- Props:
  - date (date passed from db)
  - other props TBC

### InfoTitle

![InfoTitle](/components/elements/InfoTitle/default.png)

- Props
  - text

### InputError

**_(design unconfirmed)_**
![input error](/components/elements/InputError/default-unconfirmed.png)

- States:
  - hidden or visible
- Props:
  - text

### Label

![label](/components/elements/Label/default.png)

- Props:
  - for
  - text
  - text can be left or center aligned

### LaunchIcon

![launch icon](/components/elements/LaunchIcon/default-active.png) ![launch icon](/components/elements/LaunchIcon/default-inactive.png)

- State:
  - can be active or not
- No props

### LoanTitle

![LoanTitle](/components/elements/LoanTitle/default.png)

- Props:
  - name (other person's name passed from db)

### Logo

![logo](/components/elements/Logo/default-large.png)
![logo](/components/elements/Logo/default-small.png)

- Props:
  - size

### Menu

![menu](/components/elements/Menu/default.png)

- No props

### MoneyInput

![money input](/components/elements/MoneyInput/default.png)

- Props:
  - id, name

### PactIcon

![pact icon](/components/elements/PactIcon/default-active.png) ![pact icon](/components/elements/PactIcon/default-inactive.png)

- State:
  - can be active or not
- No props

### Paragraph

![paragraph](/components/elements/Paragraph/default.png)

- Props:
  - text

### ProgressBar

![ProgressBar](/components/elements/ProgressBar/default.png)

- Props:
  - percentageComplete (percentage values and "fill" div size calculated from db)

### SelectInput

![select input](/components/elements/SelectInput/default.png)

- States (see TextInput screenshots for design):
  - default / focused / unfocused (all identical to default)
  - invalid: selection not made _(design unconfirmed)_
  - valid: input passes validation
- Props:
  - id, name
  - options

### Speed

![Speed](/components/elements/Speed/default.png)

- Props:
  - text (speed text calculated from db)

### Subtitle

![subtitle](/components/elements/Subtitle/default.png)

- No props

### TextInput

- States:
  - default / focused / unfocused (all identical to default)
    ![text input](/components/elements/TextInput/default.png)
  - invalid: input doesn't pass validation _(design unconfirmed)_
    ![text input](/components/elements/TextInput/invalid-unconfirmed.png)
  - valid: input passes validation
    ![text input](/components/elements/TextInput/valid.png)
- Props:
  - id, name
  - placeholder
  - can have "edit" wand for updating data or no edit wand for posting new data
    ![text input](/components/elements/TextInput/default-edit.png)

### Title

![title](/components/elements/Title/default.png)

- Props:
  - text (for second half of title only)
  - NB: needs to pull username from db for profile page

### Username

![username](/components/elements/Username/default.png)

- Props:
  - text (username passed from db)
