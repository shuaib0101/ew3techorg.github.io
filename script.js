const x = document.getElementById('ul');
const body = document.getElementsByTagName('body');

const toggle = () =>{
  if(x.style.left === '0px'){
      x.style.left = "-100%";
  }else{
    x.style.left = "0px";
  }
}

const myFun = () =>{
    x.style.left ="-100%";
} 

const counters = document.querySelectorAll('.counter');
    const speed = 1000;



 counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target/speed;
            
            if(count<target){
                counter.innerText = count+inc;
                setTimeout(updateCount, 1);
            }else{
                count.innerText = target;
            }
        }
        updateCount();
    });