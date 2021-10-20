import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import {InMemoryCache} from '@apollo/client/core';
import {AppComponent} from './app.component';
import {ListComponent} from './list.component';
import {UpvoterComponent} from './upvoter.component';

// Apollo
import {GraphQLModule} from './graphql.module';

@NgModule({
    imports: [
        BrowserModule,
        // Apollo
        GraphQLModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        ListComponent,
        UpvoterComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
