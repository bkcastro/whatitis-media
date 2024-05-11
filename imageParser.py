import os
from PIL import Image

def convert_png_to_jpg(directory):
    # Initialize a counter for naming files
    counter = 1
    
    # Loop through all files in the directory
    for filename in os.listdir(directory):
        if filename.endswith('.png'):
            # Create the full path to the PNG file
            png_path = os.path.join(directory, filename)

            # Open the image
            image = Image.open(png_path)

            # Reduce the resolution by a third (as specified in your example)
            new_size = (image.width // 5, image.height // 5)
            image = image.resize(new_size, Image.LANCZOS)  # Updated resampling method

            # Construct the new file name with the counter
            jpg_filename = f'card_{counter}.png'
            jpg_path = os.path.join(directory, jpg_filename)

            # # Convert the image to JPEG format
            # # If the image has an alpha channel, it will be removed by converting to RGB
            # if image.mode in ("RGBA", "P"):
            #     image = image.convert("RGB")

            # Save the image as JPEG
            image.save(jpg_path, 'PNG')

            # Increment the counter after saving the file
            counter += 1

    print("Conversion completed successfully.")

def delete_jpg_files(directory):
    # Loop through all files in the directory
    for filename in os.listdir(directory):
        if filename.endswith('.jpg'):
            # Create the full path to the JPG file
            file_path = os.path.join(directory, filename)
            
            # Delete the file
            os.remove(file_path)
            print(f"Deleted: {file_path}")
            
# Set your directory path here
directory_path = './card_images'
delete_jpg_files(directory_path)
convert_png_to_jpg(directory_path)
