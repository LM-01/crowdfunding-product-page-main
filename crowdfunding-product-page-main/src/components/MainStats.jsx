import React from 'react';

export function MainStats(){
    return <>
                <section class="main u-margin-top-md">
            <div class="main_row--nonspaced  u-margin-top-sm">
            <div class="primary_stats"></div>
                <div class="primary_stats_section">
                <h1 class="stats">
                    <span class="stats--primary">$89,914</span>
                    <span class="stats--secondary">of $100,000 backed</span>
                </h1>
                </div>
                <div class="primary_stats_rborder">&nbsp;</div>
                <div class="primary_stats_section">
                <h1 class="stats">
                    <span class="stats--primary">5,007</span>
                    <span class="stats--secondary">total backers</span>
                </h1>
                </div>
                <div class="primary_stats_rborder">&nbsp;</div>
                <div class="primary_stats_section">
                <h1 class="stats">
                    <span class="stats--primary">56</span>
                    <span class="stats--secondary">days left</span>
                </h1>
                </div>
            </div>
            <div class="main_row--nonspaced u-margin-top-sm u-margin-bottom-sm">
                <div class="primary_stats_progressbar">
                <div class="primary_stats_progressbar--actual">&nbsp;</div>
                <div class="primary_stats_progressbar--bg">&nbsp;</div>
                </div>
                
            </div>
            </section> 
    </>
}