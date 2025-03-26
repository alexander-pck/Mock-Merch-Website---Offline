from bs4 import BeautifulSoup
from pathlib import Path
import base64
import urllib.parse

def get_file_text(file_path):
    with open(file_path, "r", encoding="utf-8") as file:
        return file.read()

def get_base64_file_content(file_path):
    with open(file_path, "rb") as file:
        return base64.b64encode(file.read()).decode('utf-8')

original_html_text = Path('index.html').read_text(encoding="utf-8")
soup = BeautifulSoup(original_html_text, 'html.parser')

# Find link tags. example: <link rel="stylesheet" href="css/somestyle.css">
for tag in soup.find_all('link', href=True):
    if tag.has_attr('href'):
        href = tag['href']
        file_path = urllib.parse.unquote(href)
        file_text = get_file_text(file_path)

        # remove the tag from soup
        tag.extract()

        # insert style element
        new_style = soup.new_tag('style')
        new_style.string = file_text
        soup.html.head.append(new_style)

# Find script tags. example: <script src="js/somescript.js"></script>
for tag in soup.find_all('script', src=True):
    if tag.has_attr('src'):
        src = tag['src']
        file_path = urllib.parse.unquote(src)
        file_text = get_file_text(file_path)

        # remove the tag from soup
        tag.extract()

        # insert script element
        new_script = soup.new_tag('script')
        new_script.string = file_text
        soup.html.body.append("\n") 
        soup.html.body.append(new_script)
        

# Find image tags.
for tag in soup.find_all('img', src=True):
    if tag.has_attr('src'):
        src = tag['src']
        file_path = urllib.parse.unquote(src)
        file_content = Path(file_path).read_bytes()

        # replace filename with base64 of the content of the file
        base64_file_content = base64.b64encode(file_content)
        tag['src'] = "data:image/png;base64, {}".format(base64_file_content.decode('utf-8'))

# Save onefile
output_file_path = "dist/oneindex.html"
with open(output_file_path, "w+", encoding="utf-8") as outfile:
    outfile.write(str(soup))

print(f"Successfully created {output_file_path}")
