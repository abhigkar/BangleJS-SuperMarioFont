/* Copyright (c) 2019 Abhinav Golwalkar. See the file LICENSE for copying permission.
 
Usage:
```
require("SupMarioFont10x8").add(Graphics);
g.setSupMarioFont10x8();
g.drawString("0123456789");
```
*/

var font = atob("OHyGgsJ8OAACQv7+AgIARs6emrryYgAEhpKy8t6MABg4aMj+/ggA5OaioqK+HAA8ftKSkp4MAMDAjp6w4MAAbPKykpJuDABg8pKSlvx4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4++Pg+DgD+/pKS/mwAOHzGgoKCAP7+gsZ8OAD+/pKSggD+/pCQgAA4fMaSkp6eAP7+EBD+/gD+/gACAgL+/AD+/jhsxoIA/v4CAgD+/vg+Pvj+/gD+/vA8/v4AOHzGgoLGfDgA/v6QkPBgADh8xoKCx305AP7+kJj+ZgBi8pKSnowAgID+/oCAAPz+AgL+/ADg+B4e+OAAwPg+Pvj4Pj74wMbuODjuxgDA4D4+4MAAjp6y4sIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
var widths = atob("CAcICAgICAgICAYGBgYGBgYHBwcHBgYIBwMGBwUJBwkHCQcHBwcHCgcHBgYGBgYG");
 

exports.add = function(graphics) {
  graphics.prototype.setSupMarioFont10x8 = function() {
    this.setFontCustom(font, 48, widths, 58);
  }
}