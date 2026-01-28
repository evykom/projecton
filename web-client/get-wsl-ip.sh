#!/bin/bash
# Get WSL IP address
WSL_IP=$(hostname -I | awk '{print $1}')
echo "WSL IP Address: $WSL_IP"
echo ""
echo "Access React app at: http://$WSL_IP:3000"
echo "Backend API at: http://$WSL_IP:30000/articles"
