# !/bin/bash
npm run build
rm -rf bundle.zip
mkdir .bundle
cp -R dist/. .bundle/dist
cp -R src/. .bundle/src
cp -R assets/. .bundle/assets
cp manifest.json .bundle

# Zip so that manifest.json is at the root of the zip
cd .bundle
zip -r ../bundle.zip .

# Cleanup
cd ..
rm -rf .bundle
