import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { NavSocial } from '../navigation/nav-social/nav-social';

@Component({
  selector: 'app-header',
  imports: [NgOptimizedImage, NavSocial],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
