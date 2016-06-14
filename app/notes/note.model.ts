export interface Note {
    text: string;
    colour: string;
    id?: number;      // only optional when using client-first-on-add with server unique id    
    dirty?: boolean;  // only used on client
}

export interface AppState {
  notes: Note[];
}
