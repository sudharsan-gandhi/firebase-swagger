if !(which swagger-jsdoc-generator)
then
    echo "installing swagger-jsdoc-generator..."
    npm install -g swagger-jsdoc-generator
    npm install --save-dev swagger-jsdoc-generator
    echo "installation complete..."
fi
echo "collection swagger data"
swagger-jsdoc-generator ./functions/config.js > "./functions/test.json"
echo "updated swagger document"
firebase deploy