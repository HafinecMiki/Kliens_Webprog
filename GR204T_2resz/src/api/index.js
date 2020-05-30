import { MyPlaylistAppStorage } from './nedb';

import { MyPlaylistAppChannel } from './socket';
import { BabuAdatok } from '../domain/adatok';

export const Adatok = new MyPlaylistAppStorage();
Adatok.fill(BabuAdatok);
export const messageChannel = new MyPlaylistAppChannel('messages');