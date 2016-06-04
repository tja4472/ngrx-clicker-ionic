/* tslint:disable */
import {Component, ChangeDetectionStrategy, Input} from "@angular/core";
import {RedditPosts} from "../../reducers/reddit/postsByReddit.reducer";

@Component({
    selector: 'reddit-list',
    template: `
        <div>
        ##reddit-list##
            <strong [hidden]="!isFetching">Loading...</strong>
            <ul>
                <li *ngFor="let post of posts">
                    <a [href]="post.url">{{post.title}}</a>
                </li>
            </ul>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RedditList{
    @Input() posts : RedditPosts[];
    @Input() isFetching: boolean;
}
