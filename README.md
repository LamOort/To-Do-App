# Welcome to Todo App

After cloning this project, please run these commands to be able to run the application on your local browser

### `npm install` or `yarn install`

then
### `npm start` or `yarn start`


Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Application folders structure

```bash
├───assets/
│   ├───sass/
│   │   ├───_keyframes.scss
│   │   └───_variables.scss
│   ├───plus-solid.svg
│   ├───stepout-logo.svg
│   ├───ticked_icon.svg
│   ├───trash-solid-red.svg
│   └───trash-solid.svg
├───components/
│   ├───Forms/
│   │   ├───CategoryForm/
│   │   │   ├───Category.tsx
│   │   │   ├───CategoryForm.scss
│   │   │   └───NewCategory.tsx
│   │   ├───ChooseCategoryForm/
│   │   │   ├───ChooseCategoryForm.scss
│   │   │   ├───index.tsx
│   │   │   └───TodoColorPickingForm.tsx
│   │   └───DeleteForm/
│   │       ├───DeleteForm.scss
│   │       └───index.tsx
│   ├───LowerPart/
│   │   ├───InputFieldWrapper/
│   │   │   ├───InputField/
│   │   │   │   ├───index.tsx
│   │   │   │   └───InputField.scss
│   │   │   ├───index.tsx
│   │   │   └───InputFieldWrapper.scss
│   │   └───ToDoList/
│   │       ├───ToDoItem/
│   │       │   ├───index.tsx
│   │       │   └───ToDoItem.scss
│   │       ├───index.tsx
│   │       └───ToDoList.scss
│   ├───PopUpModal/
│   │   ├───index.tsx
│   │   └───PopUpModal.scss
│   ├───StatusBar/
│   │   ├───index.tsx
│   │   └───StatusBar.scss
│   └───UpperPart/
│       ├───CategoryBar/
│       │   ├───CategoryElement/
│       │   │   ├───CategoryElement.scss
│       │   │   └───index.tsx
│       │   ├───CategoryBar.scss
│       │   └───index.tsx
│       ├───Header/
│       │   ├───Header.scss
│       │   └───index.tsx
│       └───ProgressionBar/
│           ├───index.tsx
│           └───ProgressionBar.scss
├───containers/
│   ├───App.scss
│   ├───App.test.tsx
│   └───App.tsx
├───redux/
│   ├───actions/
│   │   ├───categoryActions.tsx
│   │   ├───modalActions.tsx
│   │   └───todoActions.tsx
│   ├───reducers/
│   │   ├───categoryReducer.tsx
│   │   ├───index.tsx
│   │   ├───modalReducer.tsx
│   │   └───todoReducer.tsx
│   └───store.tsx
├───index.css
├───index.tsx
├───react-app-env.d.ts
├───serviceWorker.ts
├───setupTests.ts
└───types.ts
```
### Some words before we dive in
  - I was kind of getting out of the standard convention of folder structuring in a React App when grouping several components to `UpperPart` folder and some on `LowerPart`. The reason behind this way thinking of mine is basically I visually realized the UI seperates the application into two parts and I decided to make my life easier when navigating around between components, so on and so fort.
  
### Technologies used and explanation
  - In this project, I decided to use `React Functional-based Components` since it is the new innovative way of developing React apps due to `React Hooks` new features, then I chose to implement `Typescript` into development procedure, see how it would go and I have to say it was interesting but at the same time causing me some hipcups here and there with all the types declaration ( which lead to the delay of this project submission and I would like to send you the sincerest apology ). The last and the most important cog in my machine to be able to functionalize it is `Redux`, nothing special but basic, `Action Creators`, `Action Dispatch`, `Reducers` all combine together by a `store` then executed and consumed by the help from our friend `react-redux` library with `useSelector` and `useDispatch`. In addition, SCSS pre-processor was implemented for overall styling and `styled-components` package also has been used slightly.
  
### Pro(s), Con(s) and my thought about them

***Pros***
  - Throughout the procedure of developing the Application, I had my chance to review the knowledge of React that I've once known and got my fingers dirty with getting off the learning curves of the new features of `React Hooks` and `Typescript` (since the last time I've used `React`, `Class-based components` with life-cycle is the only way to managing application states).

***Cons***
  - There will possibly some performance issues if this app scale up and getting more features but so far nothing was noticed.
  - Some of the actions could be more cleverly improve with the help of `Redux-thunk`, unfortunately, I was unable to setting it up with `Typescript`.
  - Responsive for mobile does not perfectly behave as the PC version.
  - Unit testing has not been implemented to the project yet.
  
  
## That's all, thank you for having me.
