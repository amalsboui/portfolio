import { Component, signal, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Contact } from './sections/contact/contact';
import { Projects } from './sections/projects/projects';
import { Skills } from './sections/skills/skills';
import { Navbar } from './shared/navbar/navbar';
import { Footer } from './shared/footer/footer';
import { Experience } from './sections/experience/experience';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Hero, About, Contact, Projects, Skills, Experience],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  gridRows = 30;
  gridCols = 40;
  gridCells: { row: number; col: number }[] = [];
  
  mouseX = -1000;
  mouseY = -1000;
  
  trailPositions: { x: number; y: number }[] = [];
  lastMoveTime = 0;
  cellSize = 48;
  
  fadeTimeout: any;
  isActive = true;

  constructor() {
    this.gridCells = [];
    for (let row = 0; row < this.gridRows; row++) {
      for (let col = 0; col < this.gridCols; col++) {
        this.gridCells.push({ row, col });
      }
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.isActive = true;
    clearTimeout(this.fadeTimeout);
    
    const now = Date.now();
    
    if (now - this.lastMoveTime < 16) {
      return;
    }
    this.lastMoveTime = now;
    
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
    
    const lastPos = this.trailPositions[this.trailPositions.length - 1];
    if (lastPos) {
      const dist = Math.sqrt(
        Math.pow(event.clientX - lastPos.x, 2) + 
        Math.pow(event.clientY - lastPos.y, 2)
      );
      
      if (dist > this.cellSize) {
        const steps = Math.ceil(dist / this.cellSize);
        for (let i = 1; i < steps; i++) {
          const t = i / steps;
          this.trailPositions.push({
            x: lastPos.x + (event.clientX - lastPos.x) * t,
            y: lastPos.y + (event.clientY - lastPos.y) * t
          });
        }
      }
    }
    
    this.trailPositions.push({ x: event.clientX, y: event.clientY });
    
    if (this.trailPositions.length > 12) {
      this.trailPositions.splice(0, this.trailPositions.length - 12);
    }
  }

  @HostListener('document:scroll')
  onScroll() {
    this.isActive = false;
    clearTimeout(this.fadeTimeout);
    
    this.fadeTimeout = setTimeout(() => {
      this.isActive = true;
    }, 1000);
  }

  @HostListener('document:mouseleave')
  onMouseLeave() {
    this.isActive = false;
  }

  @HostListener('document:mouseenter')
  onMouseEnter() {
    this.isActive = true;
  }

  getCellStyle(row: number, col: number) {
    const cellX = col * this.cellSize + this.cellSize / 2;
    const cellY = row * this.cellSize + this.cellSize / 2;
    
    const distance = Math.sqrt(
      Math.pow(cellX - this.mouseX, 2) + 
      Math.pow(cellY - this.mouseY, 2)
    );
    
    let trailIntensity = 0;
    const trailCheckRadius = this.cellSize * 1.2;
    
    for (let i = 0; i < this.trailPositions.length; i++) {
      const pos = this.trailPositions[i];
      const dx = cellX - pos.x;
      const dy = cellY - pos.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < trailCheckRadius) {
        const trailIndex = i / this.trailPositions.length;
        const intensity = 1 - trailIndex;
        trailIntensity = Math.max(trailIntensity, intensity * (1 - dist / trailCheckRadius));
      }
    }
    
    const activeMultiplier = this.isActive ? 1 : 0.05;
    
    let opacity = 0.04 * activeMultiplier;
    let background = 'transparent';
    let borderColor = 'rgba(124, 147, 212, 0.02)'; 
    let transform = 'scale(1)';
    
    if (distance < this.cellSize * 2) {
      const intensity = 1 - (distance / (this.cellSize * 2));
      opacity = (0.15 + 0.5 * intensity) * activeMultiplier;
      background = `rgba(180, 120, 255, ${0.06 * intensity})`; 
      borderColor = `rgba(180, 120, 255, ${0.2 * intensity})`; 
      transform = `scale(${1 + 0.1 * intensity})`;
    }
    
    if (trailIntensity > 0.1 && this.isActive) {
      const intensity = trailIntensity;
      opacity = Math.max(opacity, (0.25 + 0.5 * intensity) * activeMultiplier);
      background = `rgba(180, 120, 255, ${0.08 + 0.15 * intensity})`; 
      borderColor = `rgba(180, 120, 255, ${0.2 + 0.35 * intensity})`; 
      transform = `scale(${1 + 0.15 * intensity})`;
    }
    
    return {
      opacity: opacity,
      background: background,
      borderColor: borderColor,
      transform: transform,
      transition: 'all 0.15s ease-out'
    };
  }
}