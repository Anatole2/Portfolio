import type { Project } from '../../types/project';
import { laravelFerrysProject } from './laravelFerrys';
import { cFerryProject } from './cFerry';
import { signobotProject } from './signobot';
import { evoBoticsProject } from './evobotics';
import { laSocieteProject } from './laSociete';
import { syndexProject } from './syndex';
import { urcProject } from './urc';

export const projectsList: Project[] = [
    laSocieteProject,
    urcProject,
    syndexProject,
    evoBoticsProject,
    signobotProject,
    laravelFerrysProject,
    cFerryProject,
];