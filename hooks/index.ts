export function useOptimizeHandler(callback: Function): Function {
    let invoking = false;

     return (() => {
         if (!invoking) {
             invoking = true;

             requestAnimationFrame(() => {
                 callback();
                 invoking = false;
             });
         }
     });
}