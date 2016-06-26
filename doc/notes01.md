```
// gets all exports from the someReducer.ts
import * as fromSome from './someReducer';

// gets the default reducer function..
import someReducer from './someReducer';
```


Figured it out! See this stackoverflow: http://stackoverflow.com/questions/35329926/how-do-i-display-a-property-from-a-simple-object-using-ngrx-redux-and-angular2

The binding syntax should be {{(data | async).selected}}