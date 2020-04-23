function checkItem() {
    items.forEach(item => {
      if(item.done === false){
        item.done = true;
      }
    });
  }