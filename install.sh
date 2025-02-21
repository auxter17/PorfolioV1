
if ! command -v npm &> /dev/null; then
    echo "npm could not be found, please install Node.js and npm."
    exit 1
fi

NODE_VERSION=$(node -v | cut -d. -f1 | sed 's/v//')
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "Node.js version 18 or higher is required. You are using version $NODE_VERSION."
    echo "Please update Node.js to version 18 or higher."
    exit 1
fi

if [ ! -d "node_modules" ] || [ -z "$(ls -A node_modules)" ]; then
    echo "Dependencies not found. Installing them..."

    npm install

    if [ $? -eq 0 ]; then
        echo "Dependencies installed successfully!"
    else
        echo "Failed to install dependencies."
        exit 1
    fi
else
    echo "Dependencies are already installed."
fi
