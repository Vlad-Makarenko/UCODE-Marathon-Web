const block = document.getElementsByClassName('block');
const FileListDiv = document.getElementById('fileListDiv');
const Sfile = document.getElementById('Sfile');
const displayFileList = document.getElementById('displayList')

if(FileListDiv.innerHTML){

    const fileInfo = JSON.parse(FileListDiv.innerHTML);
    
    for (let index = 0; index < fileInfo.length; index++) {
        const element = fileInfo[`${index}`];
        console.log(typeof element );
        const li = document.createElement('li')
        const link = document.createElement('a')
        link.href = `/${element}`
        link.innerHTML = element;
        li.appendChild(link);
        displayFileList.appendChild(li);
    }

    FileListDiv.innerHTML = '';

}

if(Sfile.innerHTML){
    document.getElementById('contentID').style.display = 'unset';
}
