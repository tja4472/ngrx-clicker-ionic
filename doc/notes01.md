```
// gets all exports from the someReducer.ts
import * as fromSome from './someReducer';

// gets the default reducer function..
import someReducer from './someReducer';
```
### ionic-conference-app
"tslint-eslint-rules": "^1.3.0",

### aa
http://blog.wppusher.com/github-and-sourcetree-throwdown/

### bb
Figured it out! See this stackoverflow: http://stackoverflow.com/questions/35329926/how-do-i-display-a-property-from-a-simple-object-using-ngrx-redux-and-angular2

The binding syntax should be {{(data | async).selected}}



A quick quesiton, if I want to add alert to show to the user, it that place in the code correct place that I should add? Thank you!
@Effect() udpateEmail$ = this.updates$
    .whenAction(SETTINGS_UPDATE_EMAIL)
    .map<string>(toPayload)
    .switchMap(email => this._settingsService.updateEmail(email)
      .map(() => {
        console.log('successful');   // here use alert to show to the user
        return { type: SETTINGS_UPDATE_EMAIL_SUCCESS }
      })
      .catch(error => {
        console.log('fail');   // here use alert to show to the user
        return Observable.of({ type: SETTINGS_UPDATE_EMAIL_FAIL, payload: error })
      })
    );

Eduardo Born @nosachamos 07:14
@Hongbo-Miao I would not do this. The failure or success is state. I would simply return those actions from the effect, then handle them in a reducer. This way, the value is in the store. Then I'd create a service that injects the store, selects this state, and makes it available. Then in a component, where alerts can come from, I'd inject this service and react to successful updates and errors, and display the alert from there.
Might be an overkill if your app is really small, though. But for large apps accepting the price for separation of concerns pays off


https://gitter.im/ngrx/store?at=577500d997171715549740c6
Dominik Gätjens @dcg 12:00
@btroncone i put the URL into the payload so that all the data is available in the payload. but i have the feeling i have to dispatch two Actions from one Effect. First says "Object_Saved" seconed "Please_Link_the_Object" and to emit the second Action i'm doing some "do(x=>store.dispatch(LinkTheObject(x)) is there a better way?

Brian Troncone @btroncone 12:22
You can either...
Split into 2 effects, second keyed off first.
Or if you need to dispatch 2 from same effect, let's say in order, you could do something like .whenAction(SOMETHING).mergeMap(update => Observable.concat(actionOne, actionTwo))

https://gitter.im/ngrx/effects?at=574d7fb46bbc2d1d4defc1e0
Leon Radley @leon May 31 13:12
What is the correct way to redirect from within an effect?
I’m using ngrx/router

Aleš @fxck May 31 13:12
inject router, do .go or .replace
inside a do
then do .filter(() => false) to terminate the effect
so it doesn't try to dispatch anything to the store

Leon Radley @leon May 31 13:13
Ahh that’s why I’m getting an undefined action


https://gitter.im/ngrx/store?at=577be0884e50bf894a1aaa78
const entitiesMod = Object.assign({}, state.entities);
      for (let offer in entitiesMod) {
        if (!entitiesMod.hasOwnProperty(offer)) continue;
        entitiesMod[offer] = Object.assign({}, entitiesMod[offer], {checked: value});
      }


https://gitter.im/ngrx/effects?at=577c20744e50bf894a1e9554
    So take a request to authenticate in a login screen. Click button -> dispatch 'LOGIN' -> reducer captures this action to return a loading flag -> effect that is listening for 'LOGIN' picks it up then runs the ajax call to authenticate -> effect can then dispatch -> 'SUCCESS' or 'FAIL' actions of the reducers
@putskoo
the "side effect" there is calling the ajax call. Redux says you shouldnt be doing this in the reducer as its a pure function so then those things fall into the 'effects' bucket for handling


===

 https://github.com/JavascriptMick/ng2-state-talk/blob/v7.0/src/app/notes/services/notes.effects.service.ts


https://gitter.im/ngrx/effects?at=578906018423d0842436fb49
https://github.com/ReactiveX/rxjs/blob/master/src/operator/ignoreElements.ts
Better than .filter(() => false)

