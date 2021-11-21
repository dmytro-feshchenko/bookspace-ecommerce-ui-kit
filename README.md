# Bookspace Ecommerce Shared Components Library

Moved away from [bookspace-ecommerce](https://github.com/technoboom/bookspace-ecommerce) project to emphasis independance
and reusability of this library.

## Description

This is a common components library hosted on [Bit.dev](https://bit.dev). I use latest [Bit v15: Harmony (now in open beta)](https://harmony-docs.bit.dev/) version.
Those components hosted on [Bit.dev Cloud Server](https://bit.dev) and used on [bookspace-ecommerce](https://github.com/technoboom/bookspace-ecommerce) project (both [Dashboard](#) and [Storefront](https://github.com/technoboom/bookspace-ecommerce/tree/main/client/storefront)).

## Purpose:

This project serves mostly educational purpose. Just to try out how to build independent components and investigate how to compose them into large apps. I'm following Component Driven Architecture and doing small independent components which can be easily tested, deployed, versioned and imported into any existing app.

Each component consists of:
* source code of the component (+ styles)
* jest specification (for testing)
* documentation with live samples
* compositions with this component
* relations with other components

## Stack:

Mostly use the following tools/libs:

1. [Bit.dev](https://bit.dev) - v15 Harmony (beta)
2. React + TypeScript + SCSS
3. [Jest](https://jestjs.io/) with [React Testing Library](https://testing-library.com/docs/react-testing-library)

## Quick start:

To get started straight away run `bit start` and open [localhost:3000](http://localhost:3000). It may take a while to build the first time you run this command as it is building the whole User Interface for your development environment.

```bash
bit start
```

## Commands:

Add new components:

```bash
bit create react-component ui/button     # TypeScript
bit create react-component-js ui/button  # JavaScript
```

We do have Hot Reload for already created components. But we need to recompile bit after adding new component 
to properly track it.

```bash
bit compile
bit start
```

Show all info about component (including the env, the files and the dependencies):

```bash
bit show design/base-ui/input/button
```

## Testing Approach:

I use TDD approach when developing components. So, typically if you need to add some new logic to the component - think about it first, add necessary tests and improve component afterwards to pass test.

[Link to documentation here](https://harmony-docs.bit.dev/building-with-bit/testing-components).

The following addons used (alongside to Jest test runner):
* [Testing Library](https://testing-library.com)
* [Testing Library: user-event](https://testing-library.com/docs/ecosystem-user-event) - a companion library for [Testing Library](https://testing-library.com) that provides more advanced simulation of browser interactions than the built-in `fireEvent` method.

Usually `bit start` takes care of tests and running them automatically.

But if you need to run them on demand, there are:

```bash
bit test
```

To get code coverage report you can use `--coverage` flag:

```bash
bit test --coverage
```