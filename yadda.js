function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

function moveSelected(src, dest)  {
        var i = 0;
        while ( i < src.length ) {
            var item = src[i];
            if (item.selected) {
                src.splice(i,1);
                dest.push(item);
            }
            else i++;
        }
    }
    
    