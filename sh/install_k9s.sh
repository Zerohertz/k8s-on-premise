echo "Insert Version (v0.'00.0'):"
read ver
echo "Download Start!"
# https://github.com/derailed/k9s/releases/tag/v0.27.4
echo https://github.com/derailed/k9s/releases/download/v0.${ver}/k9s_Linux_amd64.tar.gz

wget https://github.com/derailed/k9s/releases/download/v0.${ver}/k9s_Linux_amd64.tar.gz
tar -zxvf ./k9s_Linux_amd64.tar.gz
mkdir -p ~/.local/bin
mv ./k9s ~/.local/bin && chmod +x ~/.local/bin/k9s
rm ./k9s_Linux_amd64.tar.gz LICENSE README.md

# export PATH=$PATH:$HOME/.local/bin