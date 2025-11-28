# ONews

## Run
To watch for changes in your files, you can run the following command to start the application:

```bash 
npm run start:dev
```

This command will watch your files, automatically recompiling and reloading the server.




## Nestjs

Nest (NestJS) is a framework for building efficient, <strong style="color: hsla(140, 73%, 68%, 1.00)">scalable</strong> Node.js __server-side__ applications

## Architecture

| File | Function |
|:-------- |:--------:|
|app.controller.ts|A basic controller with a single route.|
|app.controller.spec.ts|The unit tests for the controller.|
|app.module.ts|The root module of the application.|
|app.service.ts|A basic service with a single method.|
|main.ts|The entry file of the application|

### Controller's purpose

A controller's purpose is to handle specific requests for the application. The routing mechanism determines which controller will handle each request. Often, a controller has multiple routes, and each route can perform a different action.


### Request object

Handlers often need access to the client’s request details. Nest provides access to the request object from the underlying platform (Express by default). 

You can access the request object by instructing Nest to inject it using the @Req() decorator in the handler’s signature.

### Redirect

To redirect a response to a specific URL, you can either use a @Redirect() decorator or a library-specific response object (and call res.redirect() directly).

@Redirect() takes two arguments, url and statusCode, both are optional. The default value of statusCode is 302 (Found) if omitted.

## Express
Express is a well-known minimalist web framework for node.
It's a battle tested, production-ready library with lots of resources implemented by the community. 

### @nestjs/platform-express
The <strong style="color: hsla(140, 73%, 68%, 1.00)">@nestjs/platform-express package</strong> is used by default. Many users are well served with Express, and need take no action to enable it.

## Speed up

To speed up the development process (x20 times faster builds), you can use the SWC builder by passing the -b swc flag to the start script, as follows 
```bash
npm run start -- -b swc.
```


### MVC

```ts

import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'node:path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();


```
We told Express that the public directory will be used for storing static assets, views will contain templates, and the hbs template engine should be used to render HTML output.


### Template rendering

Create a views directory and index.hbs template inside it. In the template, we'll print a message passed from the controller:


### Handlebars

[https://handlebarsjs.com/guide/](Template Engine utilisé)


Handlebars is a simple templating language.

It uses a template and an input object to generate HTML or other text formats. Handlebars templates look like regular text with embedded Handlebars expressions.

```hbs
<p>{{firstname}} {{lastname}}</p>
```
A handlebars expression is a {{, some contents, followed by a }}. When the template is executed, these expressions are replaced with values from an input object.