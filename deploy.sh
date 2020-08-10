rm -rf eidalfaraj.tar.gz

echo "Deleted the existing tar ball"

npm run build
STATUS=$?

echo "npm run build status $STATUS"

if [ $STATUS -gt 0 ]; then
	echo "npm run build failed with status $STATUS skipping tar ball bundle."
	exit $STATUS
fi

cd build
tar -czf  ../eidalfaraj.tar.gz .
cd ../
echo "Successfully created tar ball eidalfaraj.tar.gz"

echo "Deploying eidalfaraj to server"
scp eidalfaraj.tar.gz root@142.93.171.153:/var/www/eidalfaraj.uaect.com
rm -r build
rm eidalfaraj.tar.gz
ssh root@142.93.171.153 /var/www/eidalfaraj.uaect.com/run.sh