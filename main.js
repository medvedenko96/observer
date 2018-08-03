class EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe( fn ) {
    this.observers.push( fn );
  }

  unsubscribe( fn ) {
    this.observers = this.observers.filter( subscriber => subscriber !== fn );
  }

  broadcast( data ) {
    this.observers.forEach( subscriber => subscriber( data ) );
  }
}

const observer = new EventObserver();

const data = (data1) => {
  console.log( 'subscribe for module 1 fired', data1 );
};

observer.subscribe(data);

observer.subscribe( data2 => {
  console.log( 'subscribe for module 2 fired', data2 );
} );

observer.unsubscribe(data);

observer.broadcast( { someData : 'hello' } );
observer.broadcast( { someData : 'hello!' } );