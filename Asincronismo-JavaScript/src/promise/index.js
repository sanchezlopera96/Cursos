    const somethingWillHappen = () => {
        return new Promise((resolve, reject) => {
            if(true){
                resolve('Done!');
            }else{
                reject('Fail!');
            }
        });
    };

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

    const somethingWillHappen2 = () => {
        return new Promise((resolve, reject) => {
            if(true) {
                setTimeout(() => {
                    resolve('True!');
                }, 2000)
            } else {
                const error = new Error('Fail!');
                reject(error);
            }
        });
    };

 somethingWillHappen2()
   .then(response => console.log(response))
   .catch(err => console.error(err));


Promise.all(([somethingWillHappen(), somethingWillHappen2()]))
   .then(response => {
       console.log('Array of results', response);
   })
   .catch(err => {
       console.error(err);
   })

