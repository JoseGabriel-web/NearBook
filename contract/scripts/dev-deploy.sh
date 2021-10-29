set -e

echo
echo "Ejecutando el despliegue en modo desarollo"
echo

yarn build

near dev-deploy ./build/release/contract.wasm

echo
echo "Despliegue listo."
echo