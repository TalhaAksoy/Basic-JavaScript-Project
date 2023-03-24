let globalColor = 'black';

function attrBody(body)
{
    body.style.background = "red";
    body.style.display = "flex";
    body.style.flexDirection = "row";
    body.style.width = "100%";
    body.style.minHeight = "100vh";
    body.style.overflow = "hidden";
    body.style.padding = "0";
    body.style.margin = "0";
    body.style.boxSizing = "border-box";
    console.log(body);
}

function attrColorPalette(colorPalette , body)
{
    colorPalette.style.display = "flex";
    colorPalette.style.justifyContent = "start";
    colorPalette.style.alignContent = "start";
    colorPalette.style.flexWrap = "wrap";
    colorPalette.style.width = "12rem"
    colorPalette.style.justifyContent = "center";
    colorPalette.style.alignItems = "center";
    colorPalette.style.columnGap = "1rem";
    colorPalette.style.rowGap = "1rem";
    colorPalette.style.height = "100vh";
    colorPalette.style.overflowY = 'scroll';
    colorPalette.style.position = "absolute";
    colorPalette.style.top = "50%";
    colorPalette.style.transform = 'translateY(-50%)';
    body.append(colorPalette);

}

function attrColorDiv(colorPalette)
{
    const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Orange',
                    'Purple', 'Pink', 'Gray', 'Brown', 'Turquoise',
                    'Crimson', 'Gold', 'Silver', 'Teal', 'Navy',
                    'Lime', 'Olive', 'Maroon', 'Indigo', 'Fuchsia',
                    'white'];
    for (let i = 0; i < colors.length; i++)
    {
        const div = document.createElement('div');
        div.style.width = "5rem";
        div.style.height = "5rem";
        div.style.background = colors[i];
        div.style.border = "1px solid white";
        div.style.display = "flex";
        div.style.flexDirection = "colum";
        div.style.justifyContent = "center";
        div.style.alignItems = "end";
        div.style.textAlign = "center";
        div.style.paddingBottom = ".5rem";
        let colorName = document.createElement('span');
        colorName.textContent = div.style.background;
        colorName.style.background = "white";
        colorName.style.paddingLeft = ".5rem";
        colorName.style.paddingRight = ".5rem";
        colorName.style.borderRadius = ".5rem";
        div.append(colorName);
        div.addEventListener('click', function(){
            globalColor = div.style.background;
        })
        colorPalette.append(div);
    }
}

function attrPaintArea(body)
{
    const paintArea = document.createElement('div');
    paintArea.style.width = "100%";
    paintArea.style.maxHeight = "100vh";
    paintArea.style.background = "white";
    paintArea.style.display = "flex";
    paintArea.style.flexWrap = "wrap";
    paintArea.style.justifyContent = "start";
    paintArea.style.alignContent = "start";
    let width = body.offsetWidth;
    console.log(width);
    let isDragging = false;
    for (let j = 0; j < body.offsetHeight; j = j + 16)
    {
        for (let i = 0 ; i < width; i = i + 16)
        {
            console.log(i);
            const colorPixel = document.createElement('div');
            colorPixel.style.width = "1rem";
            colorPixel.style.height = "1rem";
            colorPixel.addEventListener('mousedown', function(){
                isDragging = true;
            })
            colorPixel.addEventListener('mousemove', function(){
                if (isDragging){
                    colorPixel.style.background = globalColor;
                }
            })
            colorPixel.addEventListener('mouseup', function(){
                isDragging = false;
            })
            paintArea.append(colorPixel);
        }
        i = 0;
    }
    body.append(paintArea);

}

function attrColorSelector(body)
{
    const colorSelector = document.createElement('input');
    colorSelector.type = 'color';
    colorSelector.style.position = 'absolute';
    colorSelector.style.right = '1rem';
    colorSelector.style.top = '1rem';
    colorSelector.addEventListener('change', function(){
        globalColor = colorSelector.value;
    })
    body.append(colorSelector);

}

document.addEventListener('DOMContentLoaded', function(){
    const body = document.querySelector('body');
    const colorPalette = document.createElement('div');


    
    attrBody(body);
    // attrColorPalette(colorPalette, body);
    // attrColorDiv(colorPalette);
    attrPaintArea(body);
    attrColorSelector(body);
});