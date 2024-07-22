import * as d3 from 'd3'

export class Viewer {
    constructor(svg){
        this.svg = d3.select(`${svg}`);
    }


    render(data){
        //append folders and other to the svg
        this.svg.append("path").attr('d', "M 100 100 L 300 100 L 200 300 L 250").attr("stroke", "white")
    }
}