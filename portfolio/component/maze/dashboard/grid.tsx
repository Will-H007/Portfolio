import { useEffect } from "react";

const COL_SIZE = 9;
const ROW_SIZE = 9;
const CELL_SIZE = '70'; // Adjusted to be a string
const CELL_GAP = '1vmin'; // Adjusted to be a string
const TILE_SZIE = '10vmin'

export default class Grid {


    private gridElement: HTMLElement | null;

    constructor(gridElement: HTMLElement | null) {
        // console.log('Grid constructor called with element:', gridElement);
        this.gridElement = gridElement;

        if (this.gridElement) {
            const gridSides = this.setgridproportion(COL_SIZE,ROW_SIZE,0.25)
            console.log(gridSides)
            this.setGridStyles(gridSides);
            this.setCellAndGapStyles('white','black','1vmin');
            

           

        }
    }


    private setgridproportion(col:number, row:number, proportion:number) {
        const columnSides: string[] = [];
        const rowSides: string[] = [];
    
        for (let index = 0; index < col; index++) {
            if (index % 2 === 0) {
                columnSides.push('1fr');
            } else {
                columnSides.push(`${proportion}fr`);
            }
        }

        for (let index = 0; index < row; index++) {
            if (index % 2 === 0) {
                rowSides.push('1fr');
            } else {
                rowSides.push(`${proportion}fr`);
            }
        }
    
        return {
            columns: columnSides.join(' '),
            rows: rowSides.join(' ')
        };
    }
    
    private setGridStyles(gridSides: { columns: string; rows: string }) {
        // Set grid styles
        this.gridElement!.style.display = 'grid';
        this.gridElement!.style.gridTemplateColumns = gridSides.columns;
        this.gridElement!.style.gridTemplateRows = gridSides.rows;
        this.gridElement!.style.backgroundColor = 'transparent';
        this.gridElement!.style.gap = CELL_GAP;
        this.gridElement!.style.border = `1vmin solid white`;
        this.gridElement!.style.padding = CELL_GAP;
        this.gridElement!.style.height = `${CELL_SIZE}vmin`;
        this.gridElement!.style.width = `${CELL_SIZE}vmin`;
    }
    


    public getlocation(id: string) {
        const element = document.getElementById(id);
    
        if (element) {
            const rect = element.getBoundingClientRect();
    
            // rect.top and rect.left give the top-left coordinates of the element
            const top = rect.top;
            const left = rect.left;
    
            console.log(`Top: ${top}px, Left: ${left}px`);
            return { y: top, x: left };
        }
    
        // Return a default location if the element is not found
        return { y: -1, x: -1 };
    }
    
    public setTileStyles(location: { y: number, x: number } | undefined) {
        if (this.gridElement && location) {
            const tileElement = this.gridElement.querySelector('.tile') as HTMLElement | null;
    
            // Check if the tileElement is found before trying to set styles
            if (tileElement) {
                // Set styles for .tile element based on --x and --y
                tileElement.style.position = "absolute";
                tileElement.style.backgroundColor = "red";
                tileElement.style.borderRadius = '1vmin';
                tileElement.style.width = TILE_SZIE;
                tileElement.style.height = TILE_SZIE;
    
                tileElement.style.top = `${location.y}px`;
                tileElement.style.left = `${location.x}px`;
            } else {
                console.error('Tile element not found');
            }
        }
    }
    
    


    public setCellAndGapStyles(cellBackgroundColor: string, gapBackgroundColor: string,borderRadius: string) {
        // Set styles for .cell elements
        const cellElements = this.gridElement!.querySelectorAll('.cell');
        cellElements.forEach((cellElement) => {
            (cellElement as HTMLElement).style.backgroundColor = cellBackgroundColor;
            (cellElement as HTMLElement).style.borderRadius = borderRadius;
        });

        // Set styles for .gap elements
        const gapElements = this.gridElement!.querySelectorAll('.gap');
        gapElements.forEach((gapElement) => {
            (gapElement as HTMLElement).style.backgroundColor = gapBackgroundColor;
            (gapElement as HTMLElement).style.borderRadius = borderRadius;
});





    }
}
