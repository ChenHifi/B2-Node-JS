function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve (asyncCall1());
      }, 500);
    });
    
  }

  function resolveAfter2Seconds1() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve (asyncCall2());
      }, 500);
    });
    
  }

  function resolveAfter2Seconds2() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve (asyncCall3());
      }, 500);
    });
    
  }

  function resolveAfter2Seconds3() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve (asyncCall4());
      }, 500);
    });
    
  }

  function resolveAfter2Seconds4() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve (asyncCall5());
      }, 500);
    });
    
  }

  function resolveAfter2Seconds5() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve (asyncCall());
      }, 500);
    });
    
  }
  
  async function asyncCall() {
    console.clear();
    console.log('-----0');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }

  async function asyncCall1() {
    console.clear();
    console.log('----0-');
    const result = await resolveAfter2Seconds1();
    console.log(result);
    // expected output: "resolved"
  }

  async function asyncCall2() {
    console.clear();
    console.log('---0--');
    const result = await resolveAfter2Seconds2();
    console.log(result);
    // expected output: "resolved"
  }

  async function asyncCall3() {
    console.clear();
    console.log('--0---');
    const result = await resolveAfter2Seconds3();
    console.log(result);
    // expected output: "resolved"
  }

  async function asyncCall4() {
    console.clear();
    console.log('-0----');
    const result = await resolveAfter2Seconds4();
    console.log(result);
    // expected output: "resolved"
  }

  async function asyncCall5() {
    console.clear();
    console.log('0-----');
    const result = await resolveAfter2Seconds5();
    console.log(result);
    // expected output: "resolved"
  }
  

asyncCall()
