# OpenCIAg | Paginator

Paginator is a component that helps you to render pagination.

## Install
```shell
npm install @ciag/paginator --save
```

## Usage example with Angular

### Add the module on your Module
```ts
import { PaginatorModule } from '@ciag/paginator';

@NgModule({
    imports: [
        PaginatorModule,
    ]
})
export class AppModule{}
```


### Add the tag paginator on your HTML
```html
<paginator [initialPage]="<pageToStart | Number>" (selectedKey)="reloadArticles($event)" [totalPagination]='<totalPages | Number>'></paginator>


```

### and on your component TS
```ts
reloadArticles(event){
    console.log(event) // It will return the page that got selected
}


```


Made with ❤ in Pompéia, SP, Brazil