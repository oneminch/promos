-- Migration number: 0002 	 2026-02-19T21:52:12.165Z
DROP TABLE Promos;

CREATE TABLE Promos (
	id TEXT PRIMARY KEY,
	icon_url TEXT NOT NULL,
	title TEXT NOT NULL,
	cta_label TEXT DEFAULT 'Learn More',
	cta_url TEXT NOT NULL,
	background_color_css_var TEXT NOT NULL,
	foreground_color_css_var TEXT NOT NULL
);
