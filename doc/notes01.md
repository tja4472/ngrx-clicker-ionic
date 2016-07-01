```
// gets all exports from the someReducer.ts
import * as fromSome from './someReducer';

// gets the default reducer function..
import someReducer from './someReducer';
```


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
