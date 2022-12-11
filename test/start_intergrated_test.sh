###intergrated_ test ###

cd .. ; node index.js & 
WORK_PID = `jobs -l | awk '{print $2}'`  
sleep 3 ; cd test ; node app.spec.test.js

kill -9 `ps|grep node|awk '{print $1}'`