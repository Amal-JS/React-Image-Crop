export const ImageUpload = ()=>{
    const handleChange  = (event:React.ChangeEvent<HTMLInputElement>)=>{
        // take the file
            const file = event.target.files?.[0]
            if (!file){
                return ;
            }
            //create a reader instance and read the image
            const reader = new FileReader()
            reader.addEventListener('load',()=>{
                const imageURL = reader.result?.toString() || '';
                console.log(imageURL);
                
            })
            reader.readAsDataURL(file)
    }
    return (
        <>
        <div className=" w-full mb-2">
        <input type='file' 
        accept='image/jpeg , image/jpg ,image/png' name='image' 
        className=''
        onChange={handleChange}
            />
        </div>
        </>
    )
}