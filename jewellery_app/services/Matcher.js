export const matchItems = (newItem, allItems) => {
  let best=null, score=0;
  allItems.forEach(i=>{
    let s=0;
    if(i.name===newItem.name) s+=40;
    if(Math.abs(i.gw-newItem.gw)<2) s+=30;
    if(Math.abs(i.nw-newItem.nw)<2) s+=30;
    if(s>score){ score=s; best=i; }
  });
  return {best, score};
};
